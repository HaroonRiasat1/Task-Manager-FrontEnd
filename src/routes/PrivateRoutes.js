import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.overviewTwo} render={() => <div>overviewTwo</div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div>overviewThree</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>    <tr>
                       
                       <th>Task</th>
                       <th>Description </th>
                       <th><button>Upload File</button></th>
                       
                       </tr>
                       <tr>
                       <td>Genetic Algorithm  <span>&nbsp;&nbsp;</span></td>
                       <td>Implement Fitness Function....<a href=''>more</a></td>
                      
                       </tr></div>} />
                <Route exact path={SLUGS.tickets} render={() => <div>  
                    <center>
                        <tr>
                       
                        <th>Task</th>
                        <th>Description </th>
                        <th><button>Accept</button></th>
                        <th><button>Reject</button></th>
                        </tr>
                        <tr>
                        <td>CSP Algorithm  <span>&nbsp;&nbsp;</span></td>
                        <td>Apply Constraint Function....<a href=''>more</a></td>
                       
                        </tr>
                        <tr>
                       
                       <th>Task</th>
                       <th>Description </th>
                       <th><button>Accept</button></th>
                       <th><button>Reject</button></th>
                       </tr>
                       <tr>
                       <td>Genetic Algorithm  <span>&nbsp;&nbsp;</span></td>
                       <td>Implement Fitness Function....<a href=''>more</a></td>
                      
                       </tr>
                       
                        </center>
                        </div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>ideasThree</div>} />
                <Route exact path={SLUGS.ideas} render={() => <div>ideas</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                <Route exact path={SLUGS.agents} render={() => <div>
                   <center>
                    <table>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        </tr>
                        <tr>
                        <td>Haroon Riasat</td>
                        <td>haroon@fast.com</td>
                        <td>Developer</td>
                        </tr>
                        <tr>
                        <td>Aveen Noor</td>
                        <td>aveen@fast.com</td>
                        <td>Tester</td>
                        </tr>

                        <tr>
                        <td>Huzaifa Siddique</td>
                        <td>huzaifa@fast.com</td>
                        <td>Manager</td>
                        
                        </tr>
                    </table>
                    <button className='btn' variant="outlined">Edit</button>
                    </center>
                </div>} />
                <Route exact path={SLUGS.articles} render={() => <div>articles</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
