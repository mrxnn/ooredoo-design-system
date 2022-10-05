import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import { CheckIcon } from '../assets/Icons';

export interface Props {
  className?: string;
  onCheckedChange: (checked: boolean | 'indeterminate') => void;
  items: Array<{ id: string; title: string; check: boolean }>;
  value?: string;
  name?: string;
}

export const Checkbox = ({
  className,
  onCheckedChange,
  value,
  name,
  items,
  ...props
}: Props) => {
  return (
    <form>
      {items &&
        items.map((pokemon) => (
          <div className="mb-5 flex items-center">
            <CheckboxPrimitive.Root
              id={pokemon.id}
              defaultChecked={pokemon.check}
              onCheckedChange={onCheckedChange}
              value={pokemon.title}
              name={pokemon.title}
              className={`checkbox-root flex h-5 w-5 items-center justify-center rounded-full focus:outline-none ${className}`}
              {...props}
            >
              <CheckboxPrimitive.Indicator>
                <CheckIcon color="white" />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>

            <LabelPrimitive.Label
              htmlFor={pokemon.id}
              className="ml-3 select-none font-notosans text-sm  font-normal text-grey"
            >
              {pokemon.title}
            </LabelPrimitive.Label>
          </div>
        ))}
    </form>
  );
};
