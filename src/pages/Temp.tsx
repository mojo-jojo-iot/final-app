import React, { useState } from 'react';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonFab,
  IonFabButton,
  IonToolbar,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonTitle,
  IonSegment,
  IonSegementButton,
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { home, addCircle, close, person } from 'ionicons/icons';

import './Temp.css';

import Home from './Home';
import Account from './Account';
import Create from './Create';

const Temp: React.FC = () => {

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet animated={false}>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/temp">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/account">
            <Account />
          </Route>

          <Route exact path="/create">
            <Create />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" className="transparent-bg">
          <IonTabButton tab="home" href="/home" className="tab-button">
            <IonIcon icon={home} />
          </IonTabButton>

          <IonTabButton tab="create" href="/create" className="tab-button">
            <IonIcon icon={addCircle} />
          </IonTabButton>

          <IonTabButton tab="account" href="/account" className="tab-button">
            <IonIcon icon={person} />
          </IonTabButton>

        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  );
}

export default Temp;
