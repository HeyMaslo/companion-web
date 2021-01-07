import { Button, Link } from '@material-ui/core';
import React from 'react';
import { infoModules } from '../data/infoModules';
export default class InfoModulesOptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ display: true });
    }, 300);
  }
  render() {
    const display = this.state.display ? ' display' : '';
    const { submodule, module } = this.props;
    const data = infoModules[module][submodule];
    const firstcardCalss = data.type ? ` ${data.type}` : '';
    return (
      <div id="info-modules-options-card-page" className={display}>
        <div className="container">
          <img src={data.icon} className="float-icon" />
          <div className={`info-container first${firstcardCalss}`}>
            <div className="content-data">
              <h1 style={{ color: data.titleColor }}>{data.title}</h1>
              <h2 style={{ color: data.subtitleColor }}>{data.subtitle}</h2>
              <>{data.bio}</>
              <>
                {data?.button?.action?.type === 'url' ? (
                  <Link href={data.button.action.path} target="_blank">
                    {data.button.title}
                  </Link>
                ) : null}
              </>
            </div>
          </div>
          {data.sections.map((section) => {
            return (
              <div className="info-container">
                {section.type === 'standalone' ? (
                  <img src={section.image} className={section.type} />
                ) : (
                  <div className={`info ${section.type}`}>
                    <h3>{section.title}</h3>
                    <div
                      className={`content-direction ${section.contentDirection}`}>
                      {section.items.map((item) => {
                        return (
                          <div className={`item-container ${item.class}`}>
                            <img
                              src={item.image}
                              alt={item.alt}
                              className={item.imgClass}
                            />
                            {item.bottonTitle && (
                              <p className={`content ${item.bottomTitleClass}`}>
                                {item.bottonTitle}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
