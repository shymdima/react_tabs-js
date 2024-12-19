import classNames from "classnames";
export const Tabs = ({tabs, activeTabId, onTabSelected, setOnTabSelected, setActiveTabId}) => {
    let i = 0;
    return (
        <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            
            return (
                <li className={classNames({'is-active' : activeTabId === tab.id})} 
                data-cy="Tab"
                onClick={ () => {
                    setOnTabSelected(tab)
                    setActiveTabId(tab.id)
                }}
                key={tab.id}
                >
                    <a href={`#${activeTabId.id}`} data-cy="TabLink">
                    {tab.title}
                    </a>
                </li> 
            )
        })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {onTabSelected.content}
      </div>
    </div>
    )
};


          