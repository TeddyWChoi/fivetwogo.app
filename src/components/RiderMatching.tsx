import { Loader2, Bike } from 'lucide-react';
import { Card } from './ui/card';

interface RiderMatchingProps {
    onClick: () => void;
}

export function RiderMatching({ onClick }: RiderMatchingProps) {
    return (
        <div
            className="min-h-screen pb-20 bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-6 cursor-pointer"
            onClick={onClick}
        >
            <Card className="p-8 text-center border-0 max-w-md w-full">
                <div className="mb-8 flex justify-center">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mb-6">
                            <Bike className="w-12 h-12 text-[#E73A40]" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '-30px' }}>
                            <Loader2 className="w-8 h-8 text-[#E73A40] animate-spin" />
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl text-gray-800 mb-3">라이더 매칭 중</h2>
                <p className="text-gray-600 mb-6">가까운 라이더를 찾고 있습니다...</p>

                <div className="flex items-center justify-center gap-1 mb-8">
                    <div
                        className="w-2 h-2 bg-[#E73A40] rounded-full animate-bounce"
                        style={{ animationDelay: '0ms' }}
                    ></div>
                    <div
                        className="w-2 h-2 bg-[#E73A40] rounded-full animate-bounce"
                        style={{ animationDelay: '150ms' }}
                    ></div>
                    <div
                        className="w-2 h-2 bg-[#E73A40] rounded-full animate-bounce"
                        style={{ animationDelay: '300ms' }}
                    ></div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">💡 잠시만 기다려주세요. 곧 라이더가 배정됩니다.</p>
                </div>

                <p className="text-xs text-gray-400 mt-6">화면을 클릭하면 다음으로 이동합니다</p>
            </Card>
        </div>
    );
}
