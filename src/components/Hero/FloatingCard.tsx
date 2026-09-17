import Avatar from '../Avatar';

import { floatingCardClassName, floatingCardKind } from './constant';
import type { FloatingCardProps } from './types';

import { Activity, Comment, Team } from '@/assets/svgs';

const FloatingCard = ({ card }: FloatingCardProps) => {
  return (
    <div
      className={`${floatingCardClassName?.card} ${card.position}`}
      style={{ animationDelay: card.delay }}
    >
      <div className={floatingCardClassName?.content}>
        {card.kind === floatingCardKind?.notification && <Avatar initials="PR" />}

        {card.kind === floatingCardKind?.activity && (
          <span className={`${floatingCardClassName?.icon} ${floatingCardClassName.activityIcon}`}>
            <Activity className={floatingCardClassName.svg} />
          </span>
        )}

        {card.kind === floatingCardKind?.comment && (
          <span className={`${floatingCardClassName?.icon} ${floatingCardClassName?.commentIcon}`}>
            <Comment className={floatingCardClassName?.svg} />
          </span>
        )}

        {card.kind === floatingCardKind?.team && (
          <span className={`${floatingCardClassName?.icon} ${floatingCardClassName?.teamIcon}`}>
            <Team className={floatingCardClassName?.svg} />
          </span>
        )}
        <div className={floatingCardClassName?.text}>
          <p className={floatingCardClassName?.title}>{card.title}</p>

          {card.subtitle && <p className={floatingCardClassName?.subtitle}>{card.subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
