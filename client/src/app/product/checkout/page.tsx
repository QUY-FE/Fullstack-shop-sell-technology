import Image from "next/image";
import productURL from "#/assets/images/keyboard.jpg";
import Button from "#/components/Button/Button";

export default function CheckOut() {
  return (
    <section className="max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* form điền thông tin */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Thông tin đơn hàng</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium">
              Họ & tên <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              className="w-full bg-gray-100 outline-none rounded-md px-3 py-2 focus:bg-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Địa chỉ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              className="w-full bg-gray-100 outline-none rounded-md px-3 py-2 focus:bg-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              className="w-full bg-gray-100 outline-none rounded-md px-3 py-2 focus:bg-gray-200"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-red-500 border-gray-300 rounded"
            />
            <span className="text-sm">
              Lưu thông tin này để kiểm tra nhanh hơn lần sau
            </span>
          </div>
        </form>
      </div>
      {/* Phần thanh toán */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image
              src={productURL}
              className="object-cover rounded"
              alt="img"
              width={48}
              height={48}
            />

            <span>LCD Monitor</span>
          </div>
          <span>$650</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image
              src={productURL}
              className="object-cover rounded"
              alt="img"
              width={48}
              height={48}
            />
            <span>H1 Gamepad</span>
          </div>
          <span>$1100</span>
        </div>

        <div className="py-4">
          <div className="flex items-center justify-between border-b-2 border-[#b3b3b3] py-5">
            <p>Tổng tiền</p>
            <p>$111</p>
          </div>
          <div className="flex items-center justify-between border-b-2 border-[#b3b3b3] py-5">
            <p>Tiền ship</p>
            <p>$1</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              className="h-4 w-4 text-primary"
            />
            <span className="flex items-center gap-2">
              Bank
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                className="object-cover"
                width={32}
                height={32}
                alt="bank"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/02/Mastercard-logo.svg"
                className="object-cover"
                width={32}
                height={32}
                alt="bank2"
              />
            </span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              className="h-4 w-4 text-primary"
            />
            <span>Thanh toán khi nhận hàng</span>
          </label>
        </div>

        <div className=" flex items-center justify-around">
          <input
            type="text"
            placeholder="Nhập mã phiêu"
            className="px-4 py-2 outline-2 outline rounded-md"
          />
          <Button primary w={218} h={56} text="Áp dụng phiếu giảm giá" />
        </div>
        <Button w={'100%'} h={48} primary text="Thanh toán" />
        
      </div>
    </section>
  );
}
