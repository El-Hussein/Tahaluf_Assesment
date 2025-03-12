/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import * as Sentry from "@sentry/react-native";
import { getSecureValue } from "@utils/secure-storage";
import { RequestOptions } from "@appTypes/common";
import { API_URL } from "../../env.json";

interface State<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

class FetchConfigSingleton {
  private static instance: FetchConfigSingleton;
  private token: string | null = null;
  private nurseryId: string | null = null;
  private branchId: string | null = null;
  private parentId: string | null = null;
  private appLanguage: string | null = null;

  private constructor() { } // Prevent direct instantiation

  public static getInstance(): FetchConfigSingleton {
    if (!FetchConfigSingleton.instance) {
      FetchConfigSingleton.instance = new FetchConfigSingleton();
    }
    return FetchConfigSingleton.instance;
  }

  public async getToken(): Promise<string | null> {
    if (!this.token) {
      const _token = (await getSecureValue("token")) || null;
      this.token = _token ? _token.slice(1, -1) : null;
    }
    return this.token;
  }

  public async getNurseryId(): Promise<string | null> {
    if (!this.nurseryId) {
      this.nurseryId = (await AsyncStorage.getItem("nurseryId")) || "0";
    }
    return this.nurseryId;
  }
  public async getBranchId(): Promise<string | null> {
    if (!this.branchId) {
      this.branchId = (await AsyncStorage.getItem("branchId")) || "0";
    }
    return this.branchId;
  }
  public async getParentId(): Promise<string | null> {
    if (!this.parentId) {
      this.parentId = (await AsyncStorage.getItem("parentId")) || "0";
    }
    return this.parentId;
  }

  public async getAppLanguage(): Promise<string> {
    if (!this.appLanguage) {
      this.appLanguage = "en";
    }
    return this.appLanguage;
  }

  public invalidateCache(): void {
    this.token = null;
    this.nurseryId = null;
    this.appLanguage = null;
  }
}

const buildUrlWithParams = (
  baseUrl: string,
  params?: Record<string, string | number | null | undefined>
): string => {
  if (!params || Object.keys(params).length === 0) return baseUrl;
  const paramString = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  return `${baseUrl}?${paramString}`;
};

const buildHeaders = async (
  isPublic: boolean,
  options?: RequestOptions
): Promise<Record<string, string>> => {
  const configManager = FetchConfigSingleton.getInstance();
  const [token, appLanguage] = await Promise.all([
    configManager.getToken(),
    configManager.getAppLanguage(),
  ]);

  const headers: any = {
    "accept-language": appLanguage,
    ...options?.headers,
  };

  if (!isPublic && token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (!token && !isPublic) {
    throw new Error("Cannot fetch because token isn't available anymore");
  }
  return headers;
};

function useFetch<T = unknown>(
  url?: string,
  options?: RequestOptions
): State<T> {
  const isPublic = options?.public === undefined ? true : options?.public;

  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, loading: true };
      case "fetched":
        return { ...initialState, data: action.payload, loading: false };
      case "error":
        return { ...initialState, error: action.payload, loading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    if (options && options.lazy) return;
    if (!url) return;
    if (url.includes("undefined")) return;
    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      try {
        const configManager = FetchConfigSingleton.getInstance();
        const nurseryId = await configManager.getNurseryId();
        const branchId = await configManager.getBranchId();
        const parentId = await configManager.getParentId();
        const headers = await buildHeaders(isPublic, options);
        let params = options?.params;

        if (nurseryId && nurseryId !== "0" && !options?.params?.nurseryId)
          params = {
            ...params,
            nurseryId, // Add nurseryId if available
          };

        if (branchId && branchId !== "0" && !options?.params?.branchId)
          params = {
            ...params,
            branchId,
          };

        if (parentId && parentId !== "0" && !options?.params?.parentId)
          params = {
            ...params,
            parentId,
          };

        const fullUrl = buildUrlWithParams(`${API_URL}${url}`, params);

        const response = await fetch(fullUrl, {
          ...options,
          headers,
        });

        const data = (await response.json()) as T & {
          error: { message?: string };
        };
        if (!response.ok) {
          throw new Error(data.error.message);
        }
        if (cancelRequest.current) return;
        dispatch({ type: "fetched", payload: data });
      } catch (error: any) {
        if (cancelRequest.current) return;
        Toast.show({
          type: "error",
          text1: "ERROR",
          text2: (error?.message || "Some thing went wrong") as string,
        });
        Sentry.captureException(error, {
          tags: {
            network: "error",
          },
        });
        dispatch({ type: "error", payload: error as Error });
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url, options]);
  return state;
}

export default useFetch;
