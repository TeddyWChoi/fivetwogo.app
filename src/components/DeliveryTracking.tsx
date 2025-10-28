import { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, CheckCircle2, Package, Truck, Building } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';

interface DeliveryTrackingProps {
    deliveryId: string | null;
    onBack: () => void;
}

const steps = [
    { id: 1, label: '픽업', icon: Package, status: 'complete' },
    { id: 2, label: '이동', icon: Truck, status: 'active' },
    { id: 3, label: '도착', icon: Building, status: 'pending' },
    { id: 4, label: '배급 완료', icon: CheckCircle2, status: 'pending' },
];

export function DeliveryTracking({ deliveryId, onBack }: DeliveryTrackingProps) {
    const [progress, setProgress] = useState(25);
    const [currentStep, setCurrentStep] = useState(1);
    const [eta, setEta] = useState(12);

    useEffect(() => {
        // Simulate delivery progress - 5초만에 100% 완료
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setCurrentStep(3);
                    return 100;
                }
                return Math.min(prev + 5, 100);
            });

            setEta((prev) => Math.max(prev - 0.5, 0));
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const getStepStatus = (stepId: number) => {
        if (stepId < currentStep) return 'complete';
        if (stepId === currentStep) return 'active';
        return 'pending';
    };

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#E73A40] to-red-600 text-white p-6 pb-8 rounded-b-3xl border-b-2 border-red-700">
                <div className="flex items-center gap-4 mb-4">
                    <button
                        onClick={onBack}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-2xl">배달 추적</h1>
                        <p className="text-red-100 text-sm">실시간 상태 업데이트</p>
                    </div>
                </div>
            </div>

            <div className="px-6 -mt-4">
                {/* Map Card */}
                <Card className="overflow-hidden border-2 border-gray-100 mb-6">
                    <div className="relative h-64 bg-gradient-to-br from-red-100 via-white to-green-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <MapPin className="w-16 h-16 text-[#E73A40] animate-pulse" />
                        </div>
                        {/* Simulated route line */}
                        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                            <path
                                d="M 50 200 Q 150 150, 250 100"
                                stroke="#E73A40"
                                strokeWidth="3"
                                strokeDasharray="10,5"
                                fill="none"
                            />
                        </svg>
                    </div>

                    {/* Live Status */}
                    <div className="p-6 bg-white">
                        <div className="flex items-start gap-4 mb-4">
                            <Avatar className="w-12 h-12 flex-shrink-0">
                                <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-white">
                                    KO
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-gray-800">라이더 김OO님</h3>
                                    <Badge className="bg-green-100 text-green-700 border-0">배송중</Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">배급소로 이동 중</p>
                                <div className="flex items-center gap-2 text-sm">
                                    <Truck className="w-4 h-4 text-[#E73A40]" />
                                    <span className="text-[#E73A40]">도착 예정: {eta}분</span>
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-2">
                            <Progress value={progress} className="h-2" />
                        </div>
                        <p className="text-xs text-gray-500 text-right">{progress}% 완료</p>
                    </div>
                </Card>

                {/* Steps */}
                <Card className="p-6 border-2 border-gray-100 mb-6">
                    <h3 className="text-gray-800 mb-6">배송 진행 상황</h3>
                    <div className="space-y-4">
                        {steps.map((step, index) => {
                            const status = getStepStatus(step.id);
                            const Icon = step.icon;

                            return (
                                <div key={step.id} className="flex items-start gap-4">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                            status === 'complete'
                                                ? 'bg-green-500 text-white'
                                                : status === 'active'
                                                ? 'bg-[#E73A40] text-white animate-pulse'
                                                : 'bg-gray-200 text-gray-400'
                                        }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className={status === 'pending' ? 'text-gray-400' : 'text-gray-800'}>
                                                {step.label}
                                            </h4>
                                            {status === 'complete' && (
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            )}
                                            {status === 'active' && (
                                                <Badge className="bg-red-100 text-[#E73A40] border-0 text-xs">
                                                    진행중
                                                </Badge>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            {status === 'complete'
                                                ? '완료'
                                                : status === 'active'
                                                ? '현재 진행중'
                                                : '대기중'}
                                        </p>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="absolute left-11 w-0.5 h-12 bg-gray-200 -mb-4" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </Card>

                {/* Delivery Info */}
                <Card className="p-6 border-2 border-gray-100">
                    <h3 className="text-gray-800 mb-4">배송 정보</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">추적 번호:</span>
                            <span className="text-gray-800">{deliveryId || 'DEL-00000'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">목적지:</span>
                            <span className="text-gray-800">서울역 쉼터</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">픽업 시간:</span>
                            <span className="text-gray-800">오늘, 오후 2:30</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">예상 도착:</span>
                            <span className="text-[#E73A40]">오늘, 오후 2:{42 + eta}</span>
                        </div>
                    </div>
                </Card>

                {/* Future: Delivery Confirmation Photo */}
                {progress === 100 && (
                    <Card className="mt-6 p-6 border-2 border-green-200 bg-green-50">
                        <div className="flex items-center gap-2 mb-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <h3 className="text-green-800">배달 완료!</h3>
                        </div>
                        <p className="text-sm text-green-700 mb-4">서울역 쉼터에 전달되었습니다.</p>
                        <div className="bg-white rounded-lg overflow-hidden border-2 border-green-100">
                            <img src="/src/assets/delivery.jpg" alt="배급 인증" className="w-full h-48 object-cover" />
                            <div className="p-3">
                                <p className="text-xs text-gray-600">확인: 서울역 쉼터 • 오후 3:15</p>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
}
