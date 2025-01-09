import { 
  IonContent, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonInput, 
  IonList, 
  IonButton, 
  IonLabel, 
  IonCheckbox, 
  IonText, 
  IonInputPasswordToggle, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonIcon,
  IonSegment,
  IonSegmentButton,
  useIonRouter } from '@ionic/react';
import { Link } from 'react-router-dom';
import { skull } from 'ionicons/icons';

const Login: React.FC = () => {
  const router = useIonRouter();

  const goToRegister = () => {
    router.push('/register', 'forward');
  };

  return (
    <IonPage>
      <IonContent className="padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonIcon className="ion-padding-vertical ion-padding-horizontal" size="large" color="success" icon={skull} aria-hidden="true"/>
            </IonCol>
            <IonCol>
              <IonTitle className="ion-padding-vertical ion-text-center" color="success">LOGIN</IonTitle>

            </IonCol>
            <IonCol>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonSegment color="success" value="login">
          <IonSegmentButton value="login">
            <IonLabel>LOGIN</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="register" onClick={goToRegister}>
            <IonLabel>REGISTER</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <IonList>
            <IonItem className="ion-padding-top">
              <IonInput label="USERNAME" labelPlacement="floating" fill="outline" color="success" type="text"></IonInput>
            </IonItem>
            <IonItem className="ion-padding-top">
              <IonInput label="PASSWORD" labelPlacement="floating" fill="outline" color="success" type="password">
                <IonInputPasswordToggle slot="end" color="success"></IonInputPasswordToggle>
              </IonInput>
            </IonItem>
            <IonItem className="ion-padding-top ion-padding-horizontal">
              <IonCheckbox labelPlacement="end" color="success">I agree to the terms and conditions</IonCheckbox>
            </IonItem>
            <IonButton className="ion-padding-top ion-padding-horizontal" expand="full" fill="solid" color="success" size="default">Login</IonButton>
            <IonItem className="ion-padding-top ion-padding-bottom ion-padding-horizontal">
              <IonText>Don't have an account?</IonText>
              <IonText className="ion-padding-start" color="success" onClick={goToRegister}>Register</IonText>
            </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;
