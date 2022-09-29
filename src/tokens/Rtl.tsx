import React from 'react';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

export type Props = {
  title: string;
  subtitle: string;
  description: string;
  label: string;
  image: string;
  className?: string;
  btnChild?: React.ReactNode;
};

export const Rtl = ({
  title,
  subtitle,
  description,
  label,
  image,
  className,
  btnChild,
}: Props) => {
  let { t } = useTranslation();
  return (
    <div
      className={`relative flex h-52 w-[348px] flex-col items-start rounded-lg px-6 py-4 ${className}`}
    >
      <div>
        <p className="mb-0.5 text-xs font-black uppercase tracking-[0.3px] text-black-100 opacity-60">
          {t(`${subtitle}`)}
        </p>
        <p className="text-base font-black uppercase tracking-[0.3px] text-black-100">
          {t(`${title}`)}
        </p>
        <div className="mt-3 flex items-center">
          <div className="rounded-lg border border-black-100 px-2 py-1.5 font-outfit text-base font-semibold ltr:mr-2 rtl:ml-2">
            {label}
          </div>
          <p className="text-xs font-black">{t(`${description}`)}</p>
        </div>
      </div>
      <Button
        variant="filled"
        className="mt-auto h-[30px] w-[109px] rounded-2xl uppercase"
      >
        {t(`${btnChild}`)}
      </Button>
      <img
        src={image}
        alt="Image"
        className="absolute bottom-0 ltr:right-0 rtl:left-0 rtl:scale-x-[-1]"
      />
    </div>
  );
};
