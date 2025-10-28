import { Home, Heart, MapPin, User } from 'lucide-react';
import type { Screen } from '../App';

interface NavigationProps {
    currentScreen: Screen;
    onNavigate: (screen: Screen) => void;
}

const navItems = [
    { id: 'home' as Screen, label: '홈', icon: Home },
    { id: 'donate' as Screen, label: '기부', icon: Heart },
    { id: 'ranking' as Screen, label: '지도', icon: MapPin },
    { id: 'profile' as Screen, label: '마이', icon: User },
];

export function Navigation({ currentScreen, onNavigate }: NavigationProps) {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300">
            <div className="max-w-md mx-auto px-4">
                <div className="flex items-center justify-around h-16">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentScreen === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                                    isActive ? 'text-[#E73A40]' : 'text-gray-400 hover:text-gray-600'
                                }`}
                            >
                                <Icon
                                    className={`w-6 h-6 mb-1 ${isActive ? 'fill-red-100' : ''}`}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />
                                <span className="text-xs">{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
