import { Bell, MapPin, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import type { Screen } from '../App';
import avatarImage from 'figma:asset/522ddaf9474d2c7d2cf226f627752c24f2838ff0.png';
import logoImage from 'figma:asset/1c8f62aa84be488dab54c639f313c355a72b3b98.png';
import cafebeneImage from 'figma:asset/b1857ac949026f35b594fd32645a4ac74f3a3aa3.png';
import parisImage from 'figma:asset/1630daba7c272cda2ff2590964c9ec0dbbe8f5eb.png';
import cjImage from 'figma:asset/a7d1b9fd5db6ac722338cf21cdd363647fc2affa.png';
import twosomeImage from 'figma:asset/483af78772cd7261537dadd054b09ab2b3ded5e3.png';

interface HomeScreenProps {
    onNavigate: (screen: Screen) => void;
}

const recentDonors = [
    {
        id: 1,
        name: '카페베네 강남점',
        type: '커피숍',
        donation: '샌드위치 15개, 커피 20잔',
        time: '10분 전',
        avatar: 'CB',
        image: cafebeneImage,
    },
    {
        id: 2,
        name: '파리바게뜨 홍대점',
        type: '베이커리',
        donation: '빵 30개',
        time: '25분 전',
        avatar: 'PB',
        image: parisImage,
    },
    {
        id: 3,
        name: 'CJ제일제당',
        type: '기업',
        donation: '도시락 100개',
        time: '1시간 전',
        avatar: 'CJ',
        image: cjImage,
    },
    {
        id: 4,
        name: '투썸플레이스',
        type: '디저트 카페',
        donation: '페이스트리 25개',
        time: '2시간 전',
        avatar: 'TP',
        image: twosomeImage,
    },
];

export function HomeScreen({ onNavigate }: HomeScreenProps) {
    return (
        <div className="pb-20 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#E73A40] to-red-600 text-white p-6 rounded-b-3xl border-b-2 border-red-700">
                <div className="flex items-center justify-between mb-6">
                    <div
                        className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => onNavigate('welcome')}
                    >
                        <img
                            src={logoImage}
                            alt="FiveTwoGo Logo"
                            className="w-14 h-14 rounded-xl pointer-events-none"
                        />
                        <div>
                            <h1 className="text-2xl font-bold pointer-events-none">FiveTwoGo</h1>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button onClick={() => onNavigate('profile')} className="hover:opacity-80 transition-opacity">
                            <Avatar className="w-10 h-10 border-2 border-white">
                                <AvatarImage src={avatarImage} />
                                <AvatarFallback className="bg-red-700 text-white">CT</AvatarFallback>
                            </Avatar>
                        </button>
                    </div>
                </div>

                {/* Today's Status */}
                <Card className="bg-white p-6 border-2 border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-[#E73A40]" />
                            <h3 className="text-gray-800">오늘의 기부 현황</h3>
                        </div>
                        <Badge className="bg-green-100 text-green-700 border-0">실시간</Badge>
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-4xl text-[#E73A40]">132</span>
                        <span className="text-gray-600">개의 식사 배급 완료</span>
                    </div>
                    <p className="text-sm text-gray-500">어제보다 +28 • 배송 중 18건</p>
                </Card>
            </div>

            {/* Main CTA */}
            <div className="px-6 py-8">
                <Button
                    onClick={() => onNavigate('donate')}
                    className="w-full h-16 bg-gradient-to-r from-[#E73A40] to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg rounded-2xl"
                >
                    🍞 음식 기부하기
                </Button>
            </div>

            {/* Recent Donors */}
            <div className="px-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl text-gray-800">최근 기부자</h2>
                    <button className="text-sm text-[#E73A40] hover:text-red-700">전체보기</button>
                </div>

                <div className="space-y-3">
                    {recentDonors.map((donor) => (
                        <Card key={donor.id} className="p-4 border-2 border-gray-200">
                            <div className="flex items-start gap-4">
                                <Avatar className="w-12 h-12 flex-shrink-0">
                                    {donor.image && <AvatarImage src={donor.image} />}
                                    <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-white">
                                        {donor.avatar}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-gray-800 truncate">{donor.name}</h4>
                                        <Badge
                                            variant="outline"
                                            className="text-xs border-red-300 text-[#E73A40] flex-shrink-0"
                                        >
                                            {donor.type}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">{donor.donation}</p>
                                    <p className="text-xs text-gray-400">{donor.time}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Good Store Map Button */}
            <div className="px-6 py-6">
                <Button
                    onClick={() => onNavigate('ranking')}
                    variant="outline"
                    className="w-full h-14 border-2 border-red-300 text-[#E73A40] hover:bg-red-50 rounded-xl"
                >
                    <MapPin className="w-5 h-5 mr-2" />
                    착한 가게 지도 보기
                </Button>
            </div>
        </div>
    );
}
