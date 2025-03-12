import React, { useCallback } from 'react';
import { View } from 'react-native';
import AppButton from '@components/AppButton';
import { GetStyles } from '@designSystem/styles';
import { useHomeStore } from '@home/store/home';
import { useShallow } from 'zustand/react/shallow';

const QuestionsListFooter: React.FC = () => {
  const { getStyles } = GetStyles();
  const { currentStep, setCurrentStep } = useHomeStore(
    useShallow((state) => ({
      currentStep: state.currentCategoryStep,
      setCurrentStep: state.setCurrentCategoryStep,
    })),
  );

  const openNext = useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  const openPrevious = useCallback(() => {
    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  return (
    <View style={getStyles(['flex-1', 'flex-row-between', 'mx-md'])}>
      {/* handle disabled to change button style */}
      <AppButton
        onPress={openPrevious}
        disabled={currentStep === 1}
        containerStyles={getStyles(['px-xl', 'rounded-md'])}
        title="Previous"
      />
      <AppButton
        onPress={openNext}
        disabled={currentStep === 3}
        containerStyles={getStyles(['px-xl', 'rounded-md'])}
        title="Next"
      />
    </View>
  );
};

export default QuestionsListFooter;
