import * as React from "react";
import {
  IoBarChartOutline,
  IoPersonOutline,
  IoWaterOutline,
} from "react-icons/io5";

export default function Feature() {
  return (
    <section id="feature">
      <div className="py-16">
        <div className="max-w-7xl lg:mx-auto mx-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="mt-4 text-sm lg:text-base text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea non
              nemo vero, omnis, provident magni libero architecto earum commodi
              impedit exercitationem ipsam
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-8 gap-8 lg:gap-6">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-lg bg-[#008ce1] text-white">
                <IoPersonOutline className="w-6 h-6" />
              </div>
              <div className="text-center max-w-sm mx-auto">
                <h2 className="font-bold text-slate-900">Pelayanan</h2>
                <p className="text-sm text-slate-600">
                  Kami senantiasa memberikan pelayanan maksimal dan terbaik
                  kehadapan anda.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-lg bg-[#008ce1] text-white">
                <IoWaterOutline className="w-6 h-6" />
              </div>
              <div className="text-center max-w-sm mx-auto">
                <h2 className="font-bold text-slate-900">Kualitas</h2>
                <p className="text-sm text-slate-600">
                  Kami senantiasa menjamin kualitas air yang sampai kepada anda.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-lg bg-[#008ce1] text-white">
                <IoBarChartOutline className="w-6 h-6" />
              </div>
              <div className="text-center max-w-sm mx-auto">
                <h2 className="font-bold text-slate-900">Kepuasan</h2>
                <p className="text-sm text-slate-600">
                  Kepuasan anda adalah penyemangat kami untuk memberikan lebih.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
