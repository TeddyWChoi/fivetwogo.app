import { useState } from 'react';
import { ArrowLeft, MapPin, Star, TrendingUp, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import cafebeneImage from 'figma:asset/b1857ac949026f35b594fd32645a4ac74f3a3aa3.png';
import parisImage from 'figma:asset/1630daba7c272cda2ff2590964c9ec0dbbe8f5eb.png';
import cjImage from 'figma:asset/a7d1b9fd5db6ac722338cf21cdd363647fc2affa.png';
import twosomeImage from 'figma:asset/483af78772cd7261537dadd054b09ab2b3ded5e3.png';
import starbucksImage from 'figma:asset/179c60a49c3e5e792d810c4080cfade6ef0ff00e.png';
import toulesjoursImage from 'figma:asset/f791318a2eafc0b7091854124e775f09081b758d.png';
import lottemartImage from 'figma:asset/2faa64ea9107dcd1fad1ec1d745fe28bf39f1433.png';
import homeplusImage from 'figma:asset/c3926fcd9e3897ea5a6b0f6846ecb2f6b1d1b4f2.png';
import gs25Image from 'figma:asset/dd29d0bbfbd52e46558e4dd2c1b27c3ad9c7ba1a.png';
import mapImage from 'figma:asset/c704bd9a2931d3ebf0384fe8c93a51b4da203004.png';

interface CSRRankingProps {
    onBack: () => void;
}

const rankings = [
    {
        id: 1,
        rank: 1,
        name: 'CJ제일제당',
        type: '기업',
        donations: 2847,
        tier: 'gold',
        points: 14235,
        avatar: 'CJ',
        image: cjImage,
    },
    {
        id: 2,
        rank: 2,
        name: '파리바게뜨',
        type: '베이커리 체인',
        donations: 2156,
        tier: 'gold',
        points: 10780,
        avatar: 'PB',
        image: parisImage,
    },
    {
        id: 3,
        rank: 3,
        name: '스타벅스 코리아',
        type: '커피 체인',
        donations: 1892,
        tier: 'gold',
        points: 9460,
        avatar: 'SB',
        image: starbucksImage,
    },
    {
        id: 4,
        rank: 4,
        name: '뚜레쥬르',
        type: '베이커리 체인',
        donations: 1543,
        tier: 'silver',
        points: 7715,
        avatar: 'TJ',
        image: toulesjoursImage,
    },
    {
        id: 5,
        rank: 5,
        name: '카페베네',
        type: '커피 체인',
        donations: 1287,
        tier: 'silver',
        points: 6435,
        avatar: 'CB',
        image: cafebeneImage,
    },
    {
        id: 6,
        rank: 6,
        name: '롯데마트',
        type: '유통',
        donations: 1098,
        tier: 'silver',
        points: 5490,
        avatar: 'LM',
        image: lottemartImage,
    },
    {
        id: 7,
        rank: 7,
        name: '홈플러스',
        type: '유통',
        donations: 876,
        tier: 'bronze',
        points: 4380,
        avatar: 'HP',
        image: homeplusImage,
    },
    {
        id: 8,
        rank: 8,
        name: 'GS25',
        type: '편의점',
        donations: 654,
        tier: 'bronze',
        points: 3270,
        avatar: 'GS',
        image: gs25Image,
    },
];

const nearbyStores = [
    {
        id: 1,
        name: '파리바게뜨 강남점',
        distance: '0.3 km',
        donations: 156,
        rating: 4.8,
        type: '베이커리',
    },
    {
        id: 2,
        name: '카페베네 신사점',
        distance: '0.5 km',
        donations: 98,
        rating: 4.6,
        type: '커피숍',
    },
    {
        id: 3,
        name: '스타벅스 압구정점',
        distance: '0.7 km',
        donations: 234,
        rating: 4.9,
        type: '커피숍',
    },
    {
        id: 4,
        name: '뚜레쥬르 청담점',
        distance: '1.2 km',
        donations: 187,
        rating: 4.7,
        type: '베이커리',
    },
];

const getTierColor = (tier: string) => {
    switch (tier) {
        case 'gold':
            return 'from-yellow-400 to-yellow-600';
        case 'silver':
            return 'from-gray-300 to-gray-500';
        case 'bronze':
            return 'from-red-300 to-red-500';
        default:
            return 'from-gray-300 to-gray-500';
    }
};

const getTierBadge = (tier: string) => {
    switch (tier) {
        case 'gold':
            return '🥇';
        case 'silver':
            return '🥈';
        case 'bronze':
            return '🥉';
        default:
            return '⭐';
    }
};

export function CSRRanking({ onBack }: CSRRankingProps) {
    const [activeTab, setActiveTab] = useState('ranking');

    return (
        <div className="min-h-screen pb-20 bg-gradient-to-b from-[#fef2f2] to-[#ffffff]">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#e73a40] to-[#e7000b] text-white p-6 pb-8 rounded-b-3xl border-b-2 border-red-900">
                <div className="flex items-center gap-4 mb-4">
                    <button
                        onClick={onBack}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-2xl">착한 가게</h1>
                        <p className="text-[#ffe2e2] text-sm">랭킹 및 주변 가게</p>
                    </div>
                </div>
            </div>

            <div className="px-6 -mt-4">
                {/* ESG Banner */}
                <Card className="border-2 border-red-100 mb-[24px] bg-white mt-[0px] mr-[0px] ml-[0px] p-[24px]">
                    <div className="flex items-center gap-3" style={{ marginBottom: '8px' }}>
                        <Award className="w-6 h-6 text-[#e73a40]" />
                        <h3 className="text-[#1e2939]">이달의 사회적 기여 Top10 기업</h3>
                    </div>
                    <p className="text-sm text-[#4a5565]">
                        이 랭킹은 각 기업의 총 기부 횟수와 CSR(사회적 책임) 포인트를 기반으로 산정됩니다. 사회적 책임을
                        꾸준히 실천하는 기업일수록 더 높은 등급과 신뢰를 얻게 됩니다.
                    </p>
                </Card>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="ranking">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            랭킹
                        </TabsTrigger>
                        <TabsTrigger value="map">
                            <MapPin className="w-4 h-4 mr-2" />내 주변
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="ranking" className="space-y-3">
                        <div className="mb-4">
                            <h3 className="text-[#1e2939] mb-1">이번 달 착한 가게 랭킹</h3>
                            <p className="text-sm text-[#6a7282]">총 기부 횟수 및 영향력 기준</p>
                        </div>

                        {rankings.map((store) => (
                            <Card
                                key={store.id}
                                className={`p-5 border-2 ${
                                    store.rank <= 3 ? 'border-red-200 ring-1 ring-[#ffc9c9]' : 'border-gray-200'
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Rank Badge */}
                                    <div className="flex-shrink-0">
                                        <div
                                            className={`w-14 h-14 rounded-full bg-gradient-to-br ${getTierColor(
                                                store.tier
                                            )} flex items-center justify-center text-white`}
                                        >
                                            <span className="text-2xl">{getTierBadge(store.tier)}</span>
                                        </div>
                                        <p className="text-center text-xs text-[#6a7282] mt-1">#{store.rank}</p>
                                    </div>

                                    {/* Store Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h4 className="text-[#1e2939] mb-1">{store.name}</h4>
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs border-[#d1d5dc] text-[#4a5565]"
                                                >
                                                    {store.type}
                                                </Badge>
                                            </div>
                                            <Avatar className="w-10 h-10">
                                                {store.image && <AvatarImage src={store.image} />}
                                                <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-white text-xs">
                                                    {store.avatar}
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mt-3">
                                            <div className="bg-red-50 rounded-lg p-2">
                                                <p className="text-xs text-[#4a5565] mb-0.5">총 기부 횟수</p>
                                                <p className="text-[#e73a40]">{store.donations.toLocaleString()}</p>
                                            </div>
                                            <div className="bg-green-50 rounded-lg p-2">
                                                <p className="text-xs text-[#4a5565] mb-0.5">CSR 포인트</p>
                                                <p className="text-[#00a63e]">{store.points.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </TabsContent>

                    <TabsContent value="map" className="space-y-4">
                        <div className="mb-4">
                            <h3 className="text-[#1e2939] mb-1">내 주변 착한 가게</h3>
                            <p className="text-sm text-[#6a7282]">변화를 만드는 지역 사업체를 응원하세요</p>
                        </div>

                        {/* Map Placeholder */}
                        <Card className="overflow-hidden border-2 border-gray-200 mb-4">
                            <div className="relative h-48">
                                <img src={mapImage} alt="지도" className="w-full h-full object-cover" />
                                {/* Map pins */}
                                <div className="absolute top-12 left-16 w-8 h-8 bg-[#E73A40] rounded-full flex items-center justify-center text-white animate-pulse">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="absolute bottom-16 right-20 w-8 h-8 bg-[#E73A40] rounded-full flex items-center justify-center text-white">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="absolute top-20 right-12 w-8 h-8 bg-[#E73A40] rounded-full flex items-center justify-center text-white">
                                    <MapPin className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="p-4 bg-white">
                                <p className="text-sm text-[#4a5565]">📍 2km 내 착한 가게 12곳 표시 중</p>
                            </div>
                        </Card>

                        {/* Nearby Stores List */}
                        <div className="space-y-3">
                            {nearbyStores.map((store) => (
                                <Card key={store.id} className="p-4 border-2 border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-[#E73A40]" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h4 className="text-[#1e2939] mb-1">{store.name}</h4>
                                                    <div className="flex items-center gap-2">
                                                        <Badge
                                                            variant="outline"
                                                            className="text-xs border-[#d1d5dc] text-[#4a5565]"
                                                        >
                                                            {store.type}
                                                        </Badge>
                                                        <div className="flex items-center gap-1">
                                                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                            <span className="text-xs text-[#4a5565]">
                                                                {store.rating}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="text-sm text-[#e73a40]">{store.distance}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="text-[#4a5565]">이번 달 기부 {store.donations}회</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            className="w-full h-12 border-2 border-[#ffc9c9] text-[#e73a40] hover:bg-red-50"
                        >
                            지도에서 모든 가게 보기
                        </Button>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
