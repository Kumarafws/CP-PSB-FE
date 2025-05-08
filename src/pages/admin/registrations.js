import React from "react";
import { Button } from "../../components/ui/button";

export default function AdminRegistrations() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Kelola Pendaftaran</h1>
        <p className="text-muted-foreground">Kelola pendaftaran siswa baru</p>
      </div>
      
      <div className="rounded-lg border">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Cari pendaftar..."
                className="h-10 rounded-md border px-4"
              />
              <select className="h-10 rounded-md border px-4">
                <option value="">Semua Status</option>
                <option value="pending">Menunggu Verifikasi</option>
                <option value="verified">Terverifikasi</option>
                <option value="rejected">Ditolak</option>
              </select>
            </div>
            <Button>Filter</Button>
          </div>
        </div>
        
        <div className="border-t">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-4 text-left">Nama</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Tanggal Daftar</th>
                <th className="p-4 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Ahmad Fauzi</td>
                <td className="p-4">ahmad@example.com</td>
                <td className="p-4">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                    Menunggu Verifikasi
                  </span>
                </td>
                <td className="p-4">2024-03-15</td>
                <td className="p-4">
                  <Button variant="outline" size="sm">Detail</Button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 