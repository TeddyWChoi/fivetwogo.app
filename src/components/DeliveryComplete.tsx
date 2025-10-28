import { CheckCircle2, MapPin, Users, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface DeliveryCompleteProps {
    onClick: () => void;
}

export function DeliveryComplete({ onClick }: DeliveryCompleteProps) {
    return (
        <div
            className="min-h-screen pb-20 bg-gradient-to-b from-green-50 via-white to-red-50 flex items-center justify-center p-6 cursor-pointer"
            onClick={onClick}
        >
            <Card className="p-8 text-center border-2 border-green-200 max-w-md w-full">
                {/* Success Icon */}
                <div className="mb-6">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-12 h-12 text-green-600" />
                        </div>
                        {/* Celebration dots */}
                        <div className="absolute top-0 left-0 w-3 h-3 bg-[#E73A40] rounded-full animate-ping"></div>
                        <div
                            className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                            style={{ animationDelay: '200ms' }}
                        ></div>
                        <div
                            className="absolute bottom-4 left-2 w-2 h-2 bg-green-400 rounded-full animate-ping"
                            style={{ animationDelay: '400ms' }}
                        ></div>
                    </div>
                </div>

                <h2 className="text-3xl text-gray-800 mb-3">
                    서울역 쉼터
                    <br />
                    배급 완료!
                </h2>
                <p className="text-gray-600 mb-8">당신의 따뜻한 마음이 전달되었습니다 ❤️</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-red-50 rounded-lg p-4">
                        <MapPin className="w-6 h-6 text-[#E73A40] mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">배달 완료</p>
                        <p className="text-[#E73A40]">서울역 쉼터</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                        <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">예상 수혜자</p>
                        <p className="text-green-600">약 10명</p>
                    </div>
                </div>

                {/* Impact Message */}
                <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 p-6 mb-6">
                    <Heart className="w-8 h-8 text-[#E73A40] mx-auto mb-3" />
                    <h4 className="text-gray-800 mb-2">이번 달 기부 영향</h4>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl text-[#E73A40]">47</span>
                        <span className="text-gray-600">끼의 식사 기부</span>
                    </div>
                    <Badge className="bg-[#E73A40] text-white border-0 mt-2 mx-auto ">🥇 골드 기부자</Badge>
                </Card>

                <Button className="w-full h-14 bg-gradient-to-r from-[#E73A40] to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl">
                    확인
                </Button>

                <p className="text-xs text-gray-400 mt-6">화면을 클릭하면 배달 추적으로 이동합니다</p>
            </Card>
        </div>
    );
}
