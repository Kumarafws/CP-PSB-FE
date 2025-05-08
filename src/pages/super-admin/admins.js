import React from "react";
import { Button } from "../../components/ui/button";

export default function SuperAdminAdmins() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Kelola Admin</h1>
        <p className="text-muted-foreground">Kelola akun admin madrasah</p>
      </div>
      
      <div className="mb-6">
        <Button>+ Tambah Admin</Button>
      </div>
      
      <div className="rounded-lg border">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Cari admin..."
                className="h-10 rounded-md border px-4"
              />
              <select className="h-10 rounded-md border px-4">
                <option value="">Semua Status</option>
                <option value="active">Aktif</option>
                <option value="inactive">Tidak Aktif</option>
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
                <th className="p-4 text-left">Madrasah</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Budi Santoso</td>
                <td className="p-4">budi@example.com</td>
                <td className="p-4">Madrasah Aliyah Negeri 1</td>
                <td className="p-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                    Aktif
                  </span>
                </td>
                <td className="p-4">
                  <Button variant="outline" size="sm">Edit</Button>
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