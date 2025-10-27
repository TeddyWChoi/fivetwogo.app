import { Truck, MapPin, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';

interface DeliveryInProgressProps {
    onClick: () => void;
}

export function DeliveryInProgress({ onClick }: DeliveryInProgressProps) {
    return (
        <div
            className="min-h-screen pb-20 bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-6 cursor-pointer"
            onClick={onClick}
        >
            <Card className="p-8 border-2 border-gray-200 max-w-md w-full">
                {/* Rider Info */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                    <Avatar className="w-16 h-16 flex-shrink-0">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-white text-xl">
                            김
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <h3 className="text-xl text-gray-800 mb-1">김기사님</h3>
                        <p className="text-sm text-gray-600">⭐ 4.9 (234건)</p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center gap-1 text-[#E73A40] mb-1">
                            <Truck className="w-5 h-5" />
                        </div>
                        <p className="text-xs text-gray-500">배달 중</p>
                    </div>
                </div>

                {/* ETA Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full mb-4">
                        <Clock className="w-10 h-10 text-[#E73A40]" />
                    </div>
                    <h2 className="text-3xl text-gray-800 mb-2">배달 중...</h2>
                    <div className="flex items-center justify-center gap-2 text-[#E73A40]">
                        <span className="text-5xl">12</span>
                        <span className="text-xl">분</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">예상 도착 시간</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <Progress value={65} className="h-2 mb-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>픽업 완료</span>
                        <span>이동 중</span>
                        <span>도착 예정</span>
                    </div>
                </div>

                {/* Destination */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#E73A40] flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm text-gray-600 mb-1">목적지</p>
                            <h4 className="text-gray-800">서울역 쉼터</h4>
                            <p className="text-xs text-gray-500 mt-1">서울특별시 용산구 한강대로</p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 text-center">🚴 라이더가 안전하게 배달중</p>
                </div>

                <p className="text-xs text-gray-400 mt-6 text-center">화면을 클릭하면 다음으로 이동합니다</p>
            </Card>
        </div>
    );
}
