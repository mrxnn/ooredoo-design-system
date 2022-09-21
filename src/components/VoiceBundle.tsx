import React, { ReactElement } from 'react';
import { Button } from '../tokens/Button';

// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from '../../tailwind.config.js';

// export const fromTailwindConfig = (key: string) => {
//   const fullConfig = resolveConfig(tailwindConfig);
//   const config: any = fullConfig.theme?.colors;
//   const colors = config.primary;
//   return colors;
// };

interface Feature {
  name: string;
  value: string;
}

export interface Props {
  icon: ReactElement;
  title: string;
  amount: string;
  color: string;
  features: Feature[];
  className?: string;
}

export const VoiceBundle = ({
  icon,
  title,
  amount,
  color,
  features,
  className,
}: Props) => {
  return (
    <div className={`border rounded-lg ${className}`}>
      {/* first row */}
      <div className="flex items-center border-b py-4 px-4">
        <div className="w-10 aspect-square flex items-center justify-center rounded-md">
          {React.cloneElement(icon, { size: 20 })}
        </div>
        <p className="ml-5 font-semibold">{title}</p>
        <p className="ml-auto text-primary-red font-bold text-base">{amount}</p>
      </div>
      {/* second row */}
      <div className="flex items-center justify-between py-6 px-4">
        <div>
          <p className="text-primary-red font-bold">{features[0].value}</p>
          <p>{features[0].name}</p>
        </div>
        <div>
          <p className="text-primary-red font-bold">{features[1].value}</p>
          <p>{features[1].name}</p>
        </div>
        <Button variant="filled" className="px-4 py-1.5 rounded-full">
          PURCHASE
        </Button>
      </div>
    </div>
  );
};
