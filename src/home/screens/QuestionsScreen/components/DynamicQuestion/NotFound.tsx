import { Question } from '@appTypes/api/home';
import AppText from '@components/AppText';
import React from 'react';

const NotFound = ({ question }: { question: Question }) => {
  return <AppText>We don't support {question.type} yet.</AppText>;
};

export default NotFound;
