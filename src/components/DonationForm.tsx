import { useState } from 'react';
import { ArrowLeft, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

interface DonationFormProps {
    onSubmit: (deliveryId: string) => void;
    onBack: () => void;
}

const foodTypes = [
    { value: 'sandwich', label: '🥪 샌드위치' },
    { value: 'lunchbox', label: '🍱 도시락' },
    { value: 'coffee', label: '☕ 커피/음료' },
    { value: 'bread', label: '🍞 빵/페이스트리' },
    { value: 'fruit', label: '🍎 신선 과일' },
    { value: 'other', label: '🍽️ 기타 음식' },
];

export function DonationForm({ onSubmit, onBack }: DonationFormProps) {
    const [foodType, setFoodType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [includeDelivery, setIncludeDelivery] = useState(true);
    const [notes, setNotes] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!foodType || !quantity) {
            toast.error('필수 항목을 모두 입력해주세요');
            return;
        }

        const deliveryId = `DEL-${Date.now()}`;
        toast.success('기부가 등록되었습니다! 픽업 대기 중...');

        setTimeout(() => {
            onSubmit(deliveryId);
        }, 500);
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
                        <h1 className="text-2xl">음식 기부하기</h1>
                        <p className="text-red-100 text-sm">당신의 따뜻한 마음이 변화를 만듭니다</p>
                    </div>
                </div>
            </div>

            <div className="px-6 -mt-4">
                <Card className="p-6 border-2 border-gray-100">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <Package className="w-6 h-6 text-[#E73A40]" />
                        </div>
                        <div>
                            <h3 className="text-gray-800">기부 등록 양식</h3>
                            <p className="text-sm text-gray-500">아래 정보를 입력해주세요</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Food Type */}
                        <div className="space-y-2">
                            <Label htmlFor="foodType" className="text-gray-700">
                                음식 종류 <span className="text-[#E73A40]">*</span>
                            </Label>
                            <Select value={foodType} onValueChange={setFoodType}>
                                <SelectTrigger id="foodType" className="h-12">
                                    <SelectValue placeholder="음식 종류를 선택하세요" />
                                </SelectTrigger>
                                <SelectContent>
                                    {foodTypes.map((type) => (
                                        <SelectItem key={type.value} value={type.value}>
                                            {type.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Quantity */}
                        <div className="space-y-2">
                            <Label htmlFor="quantity" className="text-gray-700">
                                수량 <span className="text-[#E73A40]">*</span>
                            </Label>
                            <Input
                                id="quantity"
                                type="number"
                                placeholder="예: 10"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="h-12"
                                min="1"
                            />
                        </div>

                        {/* Notes */}
                        <div className="space-y-2">
                            <Label htmlFor="notes" className="text-gray-700">
                                메모
                            </Label>
                            <Textarea
                                id="notes"
                                placeholder="예: 오늘 만든 샌드위치입니다"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                className="min-h-24 resize-none"
                            />
                        </div>

                        {/* Delivery Fee */}
                        <Card className="bg-red-50 border-red-200 p-4">
                            <div className="flex items-start gap-3">
                                <Checkbox
                                    id="delivery"
                                    checked={includeDelivery}
                                    onCheckedChange={(checked) => setIncludeDelivery(checked as boolean)}
                                    className="mt-1"
                                />
                                <div className="flex-1">
                                    <Label htmlFor="delivery" className="text-gray-800 cursor-pointer">
                                        배송 서비스 포함
                                    </Label>
                                    <p className="text-sm text-gray-600 mt-1">자동결제: 거리에 따라 ₩3,000~₩5,000</p>
                                    <p className="text-xs text-[#E73A40] mt-1">💡 빠른 배급을 위해 권장합니다</p>
                                </div>
                            </div>
                        </Card>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full h-14 bg-gradient-to-r from-[#E73A40] to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg rounded-xl"
                        >
                            등록 완료 → 픽업 대기
                        </Button>
                    </form>
                </Card>

                {/* Info Card */}
                <Card className="mt-4 p-4 bg-green-50 border-2 border-green-200">
                    <p className="text-sm text-green-800">
                        ✅ 등록 후 자동으로 라이더에게 매칭 알림이 전송됩니다. 실시간으로 기부 내역을 추적할 수
                        있습니다.
                    </p>
                </Card>
            </div>
        </div>
    );
}
