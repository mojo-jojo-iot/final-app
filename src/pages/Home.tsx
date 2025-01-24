import {
  IonContent,
  IonPage,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList
} from '@ionic/react';
import { skull, trashBin } from 'ionicons/icons';
import { useState } from 'react';

// Mock data array
const mockData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  fileName: `File_828e9udhi2dj${i}.pdf`,
  date: new Date(2023, i % 12, (i % 28) + 1).toLocaleDateString('en-GB'),
  imageUrl: `https://picsum.photos/50/50?random=${i}`
}));

const Home: React.FC = () => {
  const [visibleData, setVisibleData] = useState(mockData.slice(0, 5));
  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState(false);

  const loadMoreData = (event: CustomEvent<void>) => {
    setTimeout(() => {
      const newVisibleCount = visibleData.length + 5;
      const newData = mockData.slice(0, newVisibleCount);

      setVisibleData(newData);

      if (newData.length >= mockData.length) {
        setDisableInfiniteScroll(true);
      }

      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, 500);
  };

  return (
    <IonPage>
      <IonContent style={{ '--overflow': 'hidden' }}>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-padding verticle ion-padding-horizontal">
              <IonIcon size="large" icon={skull} aria-hidden="true" color="success"/>
            </IonCol>
            <IonCol className="ion-padding-verticle ion-padding-horizontal">
              <IonText className="ion-text-right"><h4>@Username</h4></IonText>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonSearchbar
          showClearButton="always"
          clearIcon={trashBin}
          placeholder="Search"
           style={{
    '--color': 'var(--ion-color-success)', // Text color
    '--placeholder-color': 'var(--ion-color-success)', // Placeholder color
    '--icon-color': 'var(--ion-color-success)'
           }}
        />

        <IonGrid>
          <IonRow>
            <IonCol className="ion-padding-horizontal">
              <IonText className="ion-text-left" color="success">
                <h3>Recent</h3>
              </IonText>
            </IonCol>
            <IonCol className="ion-padding-horizontal">
              <IonText className="ion-text-right" color="success">
                <h6>See all</h6>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Main Scrollable Container */}
        <div style={{ 
          height: 'calc(100vh - 250px)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <IonCard style={{ 
            height: '100%',
            margin: 0,
            overflowY: 'auto',
            borderRadius: '8px',
            padding: '8px 0'
          }}>
            <IonCardContent>
              <IonList>
                {visibleData.map((item) => (
                  <IonItem 
                    key={item.id} 
                    style={{ 
                      margin: '12px 0',
                      borderRadius: '8px',
                      border: '1px solid var(--ion-color-success)'
                    }}
                  >
                    <IonGrid>
                      <IonRow>
                        <IonLabel>{item.fileName}</IonLabel>
                      </IonRow>
                      <IonRow>
                        <IonLabel>{item.date}</IonLabel>
                      </IonRow>
                    </IonGrid>
                    <IonThumbnail slot="end">
                      <img
                        src={item.imageUrl}
                        alt="Thumbnail"
                        style={{
                          borderRadius: '4px',
                          marginLeft: '16px'
                        }}
                      />
                    </IonThumbnail>
                  </IonItem>
                ))}

                <IonInfiniteScroll
                  threshold="100px"
                  disabled={disableInfiniteScroll}
                  onIonInfinite={(e) => loadMoreData(e)}
                >
                  <IonInfiniteScrollContent
                    loadingText="Loading more documents..."
                  />
                </IonInfiniteScroll>
              </IonList>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
