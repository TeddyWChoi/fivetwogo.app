import { ArrowLeft, Award, Calendar, Download, Share2, TrendingUp, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { toast } from 'sonner@2.0.3';
import avatarImage from 'figma:asset/ee7d9ad3f3d17dc298a38c24632f294512fa5bba.png';

interface MyPageProps {
    onBack: () => void;
}

const donationHistory = [
    {
        id: 1,
        date: '2025-10-12',
        foodType: '🥪 샌드위치',
        quantity: 15,
        status: '배달완료',
        destination: '서울역 쉼터',
        points: 75,
    },
    {
        id: 2,
        date: '2025-10-10',
        foodType: '☕ 커피/음료',
        quantity: 20,
        status: '배달완료',
        destination: '강남 커뮤니티 센터',
        points: 100,
    },
    {
        id: 3,
        date: '2025-10-08',
        foodType: '🍞 빵/페이스트리',
        quantity: 30,
        status: '배달완료',
        destination: '홍대 쉼터',
        points: 150,
    },
    {
        id: 4,
        date: '2025-10-05',
        foodType: '🍱 도시락',
        quantity: 25,
        status: '배달완료',
        destination: '이태원 커뮤니티 키친',
        points: 125,
    },
    {
        id: 5,
        date: '2025-10-02',
        foodType: '🍎 신선 과일',
        quantity: 40,
        status: '배달완료',
        destination: '마포 경로당',
        points: 200,
    },
];

export function MyPage({ onBack }: MyPageProps) {
    const totalDonations = 130;
    const totalPoints = 3450;
    const currentTier = '실버';

    const handleDownloadReceipt = () => {
        toast.success('영수증이 다운로드되었습니다!');
    };

    const handleShare = () => {
        toast.success('SNS에 공유되었습니다!');
    };

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#E73A40] to-red-600 text-white p-6 pb-12 rounded-b-3xl border-b-2 border-red-700">
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={onBack}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-2xl">마이페이지</h1>
                        <p className="text-red-100 text-sm">나의 기부 활동 관리</p>
                    </div>
                </div>

                {/* Profile Card */}
                <Card className="bg-white p-6 border-2 border-gray-100">
                    <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-20 h-20 border-4 border-white">
                            <AvatarImage src={avatarImage} />
                            <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-white text-xl">
                                CT
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <h3 className="text-gray-800 text-xl mb-1">최테디</h3>
                            <p className="text-sm text-gray-600 mb-2">스타벅스 홍대입구점</p>
                            <div className="flex items-center gap-2">
                                <Badge className="bg-gradient-to-r from-gray-300 to-gray-500 text-gray-800 border-0">
                                    🥈 {currentTier} 기부자
                                </Badge>
                                <Badge variant="outline" className="border-red-300 text-[#E73A40]">
                                    기업
                                </Badge>
                            </div>
                        </div>
                    </div>

                    <Separator className="my-4" />

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-4 text-center">
                            <Package className="w-6 h-6 text-[#E73A40] mx-auto mb-2" />
                            <p className="text-2xl text-[#E73A40] mb-1">{totalDonations}</p>
                            <p className="text-xs text-gray-600">누적 기부 횟수</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center">
                            <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                            <p className="text-2xl text-green-600 mb-1">{totalPoints.toLocaleString()}</p>
                            <p className="text-xs text-gray-600">CSR 포인트</p>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="px-6 -mt-6">
                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <Button
                        onClick={handleDownloadReceipt}
                        variant="outline"
                        className="h-14 border-2 border-gray-300 hover:bg-gray-50"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        영수증 다운로드
                    </Button>
                    <Button
                        onClick={handleShare}
                        variant="outline"
                        className="h-14 border-2 border-red-300 text-[#E73A40] hover:bg-red-50"
                    >
                        <Share2 className="w-4 h-4 mr-2" />
                        공유하기
                    </Button>
                </div>

                {/* Monthly Impact */}
                <Card className="p-6 border-2 border-green-200 mb-6 bg-green-50">
                    <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <h3 className="text-green-900">이번 달 기부 영향</h3>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-green-700">이번 달 기부:</span>
                            <span className="text-green-900">28개</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-green-700">도움 받은 사람:</span>
                            <span className="text-green-900">약 56명</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-green-700">절감된 CO₂:</span>
                            <span className="text-green-900">42 kg</span>
                        </div>
                    </div>
                </Card>

                {/* Donation History */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-[#E73A40]" />
                            <h3 className="text-gray-800">기부 내역</h3>
                        </div>
                        <Button variant="ghost" className="text-sm text-[#E73A40] h-auto p-0">
                            전체보기
                        </Button>
                    </div>

                    <div className="space-y-3">
                        {donationHistory.map((donation) => (
                            <Card key={donation.id} className="p-4 border-2 border-gray-200">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h4 className="text-gray-800 mb-1">{donation.foodType}</h4>
                                        <p className="text-sm text-gray-600">수량: {donation.quantity}</p>
                                    </div>
                                    <Badge className="bg-green-100 text-green-700 border-0">{donation.status}</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">{donation.destination}</span>
                                    <span className="text-[#E73A40]">+{donation.points} pts</span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                                    <span>{donation.date}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Tax Deduction Info */}
                <Card className="p-6 border-2 border-red-200 bg-red-50">
                    <h3 className="text-red-900 mb-3">세금공제 가능</h3>
                    <p className="text-sm text-red-800 mb-4">
                        올해 기부하신 내역은 세금공제 대상입니다. 신청을 위해 공식 영수증을 다운로드하세요.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-[#E73A40] to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        세금공제 영수증 다운로드
                    </Button>
                </Card>
            </div>
        </div>
    );
}
