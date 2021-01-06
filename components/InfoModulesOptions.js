import { Button, Grid, Link } from '@material-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { infoModules } from '../data/infoModules';
import InfoModulesOptionsCard from './InfoModulesOptionsCard';

@observer
export default class InfoModuleOptions extends React.Component {
  render() {
    const submoduleSelected = this.props.submodule ? ' selected' : '';
    return (
      <div id="info-module-options" className={`submodule ${submoduleSelected}`}>
        {this.props.module ? (
          <div className="container">
            <Grid container>
              <Grid xs={12} sm={12} md={6} lg={6}>
                <div className="module-info">
                  <h1>{infoModules[this.props.module].title}</h1>
                  <h2>{infoModules[this.props.module].subtitle}</h2>
                  <>{infoModules[this.props.module].bio}</>
                  {infoModules[this.props.module].button && (
                    <>
                      {infoModules[this.props.module].button.action.type ===
                      'url' ? (
                        <Link
                          href={
                            infoModules[this.props.module].button.action.path
                          }
                          target="_blank">
                          {infoModules[this.props.module].button.title}
                        </Link>
                      ) : (
                        <Button>
                          {infoModules[this.props.module].button.title}
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </Grid>
              <Grid xs={12} sm={12} md={6} lg={6}>
                <div className="options-container">
                  <div className="options-container-list">
                    {infoModules[this.props.module].options.map((option) => {
                      return (
                        <InfoModulesOptionsCard
                          data={option}
                          selected={option.page === this.props.submodule}
                        />
                      );
                    })}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        ) : null}
      </div>
    );
  }
}
