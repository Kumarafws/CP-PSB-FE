import React from "react";
import { Button } from "../../components/ui/button";

export default function AdminDocuments() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Kelola Dokumen</h1>
        <p className="text-muted-foreground">Verifikasi dokumen pendaftar</p>
      </div>
      
      <div className="rounded-lg border">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Cari dokumen..."
                className="h-10 rounded-md border px-4"
              />
              <select className="h-10 rounded-md border px-4">
                <option value="">Semua Jenis</option>
                <option value="akte">Akte Kelahiran</option>
                <option value="kk">Kartu Keluarga</option>
                <option value="rapor">Rapor</option>
              </select>
            </div>
            <Button>Filter</Button>
          </div>
        </div>
        
        <div className="border-t">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-4 text-left">Nama Siswa</th>
                <th className="p-4 text-left">Jenis Dokumen</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Tanggal Upload</th>
                <th className="p-4 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Ahmad Fauzi</td>
                <td className="p-4">Akte Kelahiran</td>
                <td className="p-4">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                    Menunggu Verifikasi
                  </span>
                </td>
                <td className="p-4">2024-03-15</td>
                <td className="p-4">
                  <Button variant="outline" size="sm">Verifikasi</Button>
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