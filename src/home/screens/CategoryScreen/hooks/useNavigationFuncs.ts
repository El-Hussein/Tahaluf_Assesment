import { useAppNavigation } from '@hooks/useAppNavigation';

export const useNavigationFuncs = (categoryType: string) => {
  const { navigateToScreen } = useAppNavigation();

  const goToChampionships = () => navigateToScreen({ routeName: 'Championships' });
  const goToJokey = (type: string) => navigateToScreen({ routeName: 'Staff', params: { type } });
  const goToAuction = () => navigateToScreen({ routeName: categoryType == 'beauty' ? 'BeautyAuctions' : 'Auctions' });
  const gotoEvent = () => navigateToScreen({ routeName: 'EventStack' });
  const gotoMedia = () => navigateToScreen({ routeName: 'Media' });

  return {
    goToChampionships,
    goToJokey,
    goToAuction,
    gotoEvent,
    gotoMedia,
  };
};
