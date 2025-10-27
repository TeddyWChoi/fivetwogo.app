import { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HomeScreen } from './components/HomeScreen';
import { DonationForm } from './components/DonationForm';
import { DeliveryTracking } from './components/DeliveryTracking';
import { CSRRanking } from './components/CSRRanking';
import { MyPage } from './components/MyPage';
import { Navigation } from './components/Navigation';
import { RiderMatching } from './components/RiderMatching';
import { DeliveryInProgress } from './components/DeliveryInProgress';
import { DeliveryComplete } from './components/DeliveryComplete';
import { Toaster } from './components/ui/sonner';

export type Screen =
    | 'welcome'
    | 'home'
    | 'donate'
    | 'tracking'
    | 'ranking'
    | 'profile'
    | 'rider-matching'
    | 'delivery-progress'
    | 'delivery-complete';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
    const [activeDeliveryId, setActiveDeliveryId] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentScreen]);

    const renderScreen = () => {
        switch (currentScreen) {
            case 'welcome':
                return <WelcomeScreen onGetStarted={() => setCurrentScreen('home')} />;
            case 'home':
                return <HomeScreen onNavigate={setCurrentScreen} />;
            case 'donate':
                return (
                    <DonationForm
                        onSubmit={(deliveryId) => {
                            setActiveDeliveryId(deliveryId);
                            setCurrentScreen('rider-matching');
                        }}
                        onBack={() => setCurrentScreen('home')}
                    />
                );
            case 'rider-matching':
                return <RiderMatching onClick={() => setCurrentScreen('delivery-progress')} />;
            case 'delivery-progress':
                return <DeliveryInProgress onClick={() => setCurrentScreen('delivery-complete')} />;
            case 'delivery-complete':
                return <DeliveryComplete onClick={() => setCurrentScreen('tracking')} />;
            case 'tracking':
                return <DeliveryTracking deliveryId={activeDeliveryId} onBack={() => setCurrentScreen('home')} />;
            case 'ranking':
                return <CSRRanking onBack={() => setCurrentScreen('home')} />;
            case 'profile':
                return <MyPage onBack={() => setCurrentScreen('home')} />;
            default:
                return <HomeScreen onNavigate={setCurrentScreen} />;
        }
    };

    const showNavigation =
        currentScreen !== 'welcome' &&
        currentScreen !== 'rider-matching' &&
        currentScreen !== 'delivery-progress' &&
        currentScreen !== 'delivery-complete';

    return (
        <div
            className={`min-h-screen ${
                currentScreen === 'welcome' ? 'bg-[#202020]' : 'bg-gradient-to-b from-red-50 to-white'
            }`}
        >
            {renderScreen()}
            {showNavigation && <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />}
            <Toaster />
        </div>
    );
}
