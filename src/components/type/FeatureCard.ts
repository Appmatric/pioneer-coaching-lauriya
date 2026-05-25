import { ReactNode } from 'react';

export type ImagePosition = 'top' | 'left' | 'right';

export interface FeatureCardProps {
  heading?: string;
  paragraph?: string;
  image?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  bgColor?: string;
  imagePosition?: ImagePosition;
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;
  className?: string;
  children?: ReactNode;
}