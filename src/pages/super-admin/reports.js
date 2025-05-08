import React from "react";
import { Button } from "../../components/ui/button";

export default function SuperAdminReports() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Laporan Sistem</h1>
        <p className="text-muted-foreground">Lihat dan unduh laporan sistem</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Laporan Madrasah</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Periode</label>
              <select className="w-full h-10 rounded-md border px-4">
                <option value="this_month">Bulan Ini</option>
                <option value="last_month">Bulan Lalu</option>
                <option value="this_year">Tahun Ini</option>
              </select>
            </div>
            <Button className="w-full">Unduh Laporan</Button>
          </div>
        </div>
        
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Laporan Admin</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select className="w-full h-10 rounded-md border px-4">
                <option value="all">Semua Status</option>
                <option value="active">Aktif</option>
                <option value="inactive">Tidak Aktif</option>
              </select>
            </div>
            <Button className="w-full">Unduh Laporan</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 