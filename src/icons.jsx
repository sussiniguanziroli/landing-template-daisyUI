// --- FILENAME: src/icons.jsx ---
// NOTE: The file is renamed to .jsx to allow JSX syntax.

import React from 'react';
import { CheckCircle, Star, Menu, X, ArrowRight } from 'lucide-react';

export const ICONS = {
  CheckCircle: (props) => <CheckCircle {...props} />,
  Star: (props) => <Star {...props} />,
  Menu: (props) => <Menu {...props} />,
  X: (props) => <X {...props} />,
  ArrowRight: (props) => <ArrowRight {...props} />,
};
