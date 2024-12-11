import React from 'react';
import List from '../../atoms/List';

class Skills extends React.Component {
  render() {
    const responsibilities = [
      'Communication',
      'Team Work',
      'Project Management',
      'Creativity',
    ];
    return (
      <section className='mh-skills' id='mh-skills'>
        <div className='home-v-img'>
          <div className='container'>
            <div className='row section-separator'>
              <div className='section-title text-center col-sm-12'>
                {/*<h2>Skills</h2>*/}
              </div>
              <div className='col-sm-12 col-md-6'>
                <div className='mh-skills-inner'>
                  <div
                    className='mh-professional-skill wow fadeInUp'
                    data-wow-duration='0.8s'
                    data-wow-delay='0.3s'
                  >
                    <h3>Technical Skills</h3>
                    <div className='each-skills'>
                      <div className='candidatos'>
                        <div className='parcial'>
                          <div className='info'>
                            <div className='nome'>Javascript</div>
                            <div className='percentagem-num'>95%</div>
                          </div>
                          <div className='progressBar'>
                            <div
                              className='percentagem'
                              style={{ width: '95%' }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='candidatos'>
                        <div className='parcial'>
                          <div className='info'>
                            <div className='nome'>PHP</div>
                            <div className='percentagem-num'>96%</div>
                          </div>
                          <div className='progressBar'>
                            <div
                              className='percentagem'
                              style={{ width: '96%' }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='candidatos'>
                        <div className='parcial'>
                          <div className='info'>
                            <div className='nome'>React</div>
                            <div className='percentagem-num'>60%</div>
                          </div>
                          <div className='progressBar'>
                            <div
                              className='percentagem'
                              style={{ width: '60%' }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='candidatos'>
                        <div className='parcial'>
                          <div className='info'>
                            <div className='nome'>Mysql</div>
                            <div className='percentagem-num'>90%</div>
                          </div>
                          <div className='progressBar'>
                            <div
                              className='percentagem'
                              style={{ width: '90%' }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='candidatos'>
                        <div className='parcial'>
                          <div className='info'>
                            <div className='nome'>Mongo DB</div>
                            <div className='percentagem-num'>80%</div>
                          </div>
                          <div className='progressBar'>
                            <div
                              className='percentagem'
                              style={{ width: '80%' }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='candidatos'>
                        <div className='parcial'>
                          <div className='info'>
                            <div className='nome'>Mssql</div>
                            <div className='percentagem-num'>70%</div>
                          </div>
                          <div className='progressBar'>
                            <div
                              className='percentagem'
                              style={{ width: '70%' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6'>
                <div
                  className='mh-professional-skills wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.5s'
                >
                  <h3>Professional Skills</h3>
                  <List
                    items={responsibilities}
                    className='work-responsibility'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
