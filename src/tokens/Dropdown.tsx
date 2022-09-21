import React, { HTMLAttributes } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline' | 'flat';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;
  size: 'sm' | 'md' | 'lg';
}

export const Dropdown = () => {
  return (
    <DropdownRoot>
      <DropdownTrigger />
      <DropdownPortal forceMount={true}>
        <DropdownContent>
          <DropdownMenu.Label />
          <DropdownMenu.Item />

          <DropdownMenu.Group>
            <DropdownMenu.Item />
          </DropdownMenu.Group>

          <DropdownMenu.CheckboxItem>
            <DropdownMenu.ItemIndicator />
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.RadioGroup></DropdownMenu.RadioGroup>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger />
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent />
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Arrow />
        </DropdownContent>
      </DropdownPortal>
    </DropdownRoot>
  );
};

interface RootProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?(): void;
  modal?: boolean;
  dir?: 'ltr' | 'rtl';
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

const DropdownRoot = ({
  defaultOpen,
  open,
  onOpenChange,
  modal = true,
  dir,
  children,
  ...props
}: RootProps) => {
  return (
    <DropdownMenu.Root
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      modal={modal}
      dir={dir}
      children={children}
      {...props}
    ></DropdownMenu.Root>
  );
};

const DropdownTrigger = (props: any) => {
  return <DropdownMenu.Trigger {...props} />;
};

interface PortalProps {
  forceMount: true;
  container?: HTMLElement;
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

const DropdownPortal = ({
  forceMount = true,
  container,
  children,
  ...props
}: PortalProps) => {
  return (
    <DropdownMenu.Portal
      forceMount={forceMount}
      container={container}
      children={children}
      {...props}
    ></DropdownMenu.Portal>
  );
};

const DropdownContent = (props: any) => {
  return <DropdownMenu.Content {...props}></DropdownMenu.Content>;
};
