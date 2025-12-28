import { LucideProps } from 'lucide-react';
import React from 'react';
import { Icon } from './sprite';

export const HomeIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="home"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
HomeIcon.displayName = 'HomeIcon';

export const SectionsIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="sections"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
SectionsIcon.displayName = 'SectionsIcon';

export const CalendarIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="calendar"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
CalendarIcon.displayName = 'CalendarIcon';

export const DocumentIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="document"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
DocumentIcon.displayName = 'DocumentIcon';

export const BuildingIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="building"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
BuildingIcon.displayName = 'BuildingIcon';

export const GroupIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="group"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
GroupIcon.displayName = 'GroupIcon';

export const ArchiveIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="archive"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
ArchiveIcon.displayName = 'ArchiveIcon';

export const ChartIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="chart"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
ChartIcon.displayName = 'ChartIcon';

export const HeadphonesIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="headphones"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
HeadphonesIcon.displayName = 'HeadphonesIcon';

export const SettingsIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="settings"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
SettingsIcon.displayName = 'SettingsIcon';

export const ThemeIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => {
    const { size, className } = props;
    return (
      <span className={className}>
        <Icon
          id="theme"
          size={(size as number) || 24}
          className="text-current"
        />
      </span>
    );
  }
);
ThemeIcon.displayName = 'ThemeIcon';
