import { boardColumns, dashboardMockupClassName } from './constant';

const DashboardMockup = () => {
  return (
    <div className={dashboardMockupClassName?.container}>
      {/* Window chrome */}
      <div className={dashboardMockupClassName?.window}>
        <span
          className={`${dashboardMockupClassName?.windowDot} ${dashboardMockupClassName?.redDot}`}
        />
        <span
          className={`${dashboardMockupClassName?.windowDot} ${dashboardMockupClassName?.yellowDot}`}
        />
        <span
          className={`${dashboardMockupClassName?.windowDot} ${dashboardMockupClassName?.greenDot}`}
        />
        <span className={dashboardMockupClassName?.title}>
          Product Launch
        </span>
      </div>
      {/* Board */}
      <div className={dashboardMockupClassName?.board}>
        {boardColumns?.map((column) => (
          <div key={column.title} className={dashboardMockupClassName?.column}>
            <div className={dashboardMockupClassName?.columnHeader}>
              <span className={dashboardMockupClassName?.columnTitle}>
                {column.title}
              </span>
              <span className={dashboardMockupClassName?.count}>
                {column.count}
              </span>
            </div>
            <div className={dashboardMockupClassName?.cards}>
              {column.cards?.map((card) => (
                <div
                  key={card}
                  className={dashboardMockupClassName?.card}
                >
                  <p className={dashboardMockupClassName?.cardText}>
                    {card}
                  </p>
                  <span
                    className={`${dashboardMockupClassName?.cardIndicator} ${column.color}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMockup;