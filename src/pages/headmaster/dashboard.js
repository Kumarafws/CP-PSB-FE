import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "../../components/ui/dialog";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function HeadmasterDashboard() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Data untuk diagram perbandingan status pendaftaran
  const statusData = {
    labels: ['Diterima', 'Ditolak', 'Menunggu Verifikasi'],
    datasets: [
      {
        data: [120, 30, 50],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',  // Hijau
          'rgba(239, 68, 68, 0.8)',  // Merah
          'rgba(234, 179, 8, 0.8)',  // Kuning
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(239, 68, 68)',
          'rgb(234, 179, 8)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Data untuk diagram perbandingan tahunan
  const yearlyData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Jumlah Pendaftar',
        data: [150, 180, 200, 220, 250],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  // Data untuk diagram perbandingan status per tahun
  const yearlyStatusData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Diterima',
        data: [100, 120, 140, 150, 180],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1,
      },
      {
        label: 'Ditolak',
        data: [50, 60, 60, 70, 70],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Kepala Sekolah</h1>
          <p className="text-muted-foreground mt-1">Selamat datang di panel kepala sekolah</p>
        </div>
        <Button 
          variant="destructive" 
          onClick={() => setShowLogoutDialog(true)}
          className="flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Keluar
        </Button>
      </div>
      
      {/* Dialog Konfirmasi Logout */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Konfirmasi Keluar</DialogTitle>
          </DialogHeader>
          <p>Apakah Anda yakin ingin keluar?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowLogoutDialog(false)}>
              Batal
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Ya
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card className="col-span-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Data Siswa</CardTitle>
            <Button onClick={() => navigate('/headmaster/students')} className="bg-primary hover:bg-primary/90">
              Lihat Data Siswa
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Kelola data siswa dan informasi akademik</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Status Pendaftaran</CardTitle>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Pilih Tahun" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Pie data={statusData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Perbandingan Jumlah Pendaftar</CardTitle>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Pilih Tahun" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Bar data={yearlyData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Perbandingan Status Pendaftaran per Tahun</CardTitle>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Pilih Tahun" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Bar 
                data={yearlyStatusData} 
                options={{
                  ...chartOptions,
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Jumlah Siswa'
                      }
                    },
                    x: {
                      title: {
                        display: true,
                        text: 'Tahun'
                      }
                    }
                  },
                }} 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default HeadmasterDashboard; 