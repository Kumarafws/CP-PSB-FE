import React from "react";
import { Button } from "../../components/ui/button";

export default function AdminStudents() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Kelola Siswa</h1>
        <p className="text-muted-foreground">Kelola data siswa</p>
      </div>
      
      <div className="rounded-lg border">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Cari siswa..."
                className="h-10 rounded-md border px-4"
              />
              <select className="h-10 rounded-md border px-4">
                <option value="">Semua Kelas</option>
                <option value="7">Kelas 7</option>
                <option value="8">Kelas 8</option>
                <option value="9">Kelas 9</option>
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
                <th className="p-4 text-left">NIS</th>
                <th className="p-4 text-left">Kelas</th>
                <th className="p-4 text-left">Program</th>
                <th className="p-4 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Ahmad Fauzi</td>
                <td className="p-4">2024001</td>
                <td className="p-4">7A</td>
                <td className="p-4">Boarding School</td>
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