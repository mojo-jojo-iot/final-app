import {
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonSearchbar,
  IonModal
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { skull, home, person, mail, calendarClear, image, camera } from 'ionicons/icons';
import React, { useState } from 'react';

import './Create.css';

import Camera from './Camera';

const Create: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonContent className="padding">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-padding verticle ion-padding-horizontal">
              <IonIcon size="large" color="success" icon={skull} aria-hidden="true"/>
            </IonCol>
            <IonCol className="ion-padding-verticle ion-padding-horizontal">
              <IonText className="ion-text-right"><h4>@Username</h4></IonText>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>

          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol className="ion-text-center">
              <IonButton color="success" size="large" className="big-button">
                <IonIcon icon={image} />
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol className="ion-text-center">
              <IonButton color="success" size="large" className="big-button" onClick={() => setShowModal(true)}>
                <IonIcon icon={camera} />
              </IonButton>
            </IonCol>
          </IonRow>

        </IonGrid>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <Camera closeModal={() => setShowModal(false)} />
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Create;
