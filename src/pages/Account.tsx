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
  IonSearchbar 
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { skull, home, person, mail, calendarClear } from 'ionicons/icons';

import './Account.css';

const Home: React.FC = () => {
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

      
        <IonItem className="ion-padding-verticle ion-padding-horizontal transparent-bg">
          <IonText className="ion-text-left">
            <h3>Account</h3>
          </IonText>
        </IonItem>
  
        <IonItem className="ion-padding-horizontal ion-margin-top transparent-bg">
          <IonText>
            <IonIcon icon={person} className="ion-padding-horizontal"/>
            Username
          </IonText>
          <IonText slot="end">your_username</IonText>
        </IonItem>
        
        <IonItem className="ion-padding-horizontal ion-margin-top transparent-bg">
          <IonText>
            <IonIcon icon={mail} className="ion-padding-horizontal"/>
            Email
          </IonText>
          <IonText slot="end">username@mail.domain</IonText>
        </IonItem>
        
        <IonItem className="ion-padding-horizontal ion-margin-top transparent-bg">
          <IonText>
            <IonIcon icon={calendarClear} className="ion-padding-horizontal"/>
            Joined
          </IonText>
          <IonText slot="end">dd-mm-yyyy</IonText>
        </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
