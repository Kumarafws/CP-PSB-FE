import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulasi login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulasi data user (dalam implementasi nyata, ini akan datang dari API)
      const userData = {
        email: formData.email,
        role: determineUserRole(formData.email), // Fungsi untuk menentukan role berdasarkan email
        name: "User Name",
      };

      // Simpan data user ke localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirect berdasarkan role
      switch (userData.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "super_admin":
          navigate("/super-admin/dashboard");
          break;
        default:
          navigate("/dashboard");
      }

      toast({
        title: "Login berhasil",
        description: "Selamat datang kembali!",
      });
    } catch (error) {
      toast({
        title: "Login gagal",
        description: "Email atau password salah",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk menentukan role berdasarkan email (untuk demo)
  const determineUserRole = (email) => {
    if (email.includes("admin")) {
      return "admin";
    } else if (email.includes("super")) {
      return "super_admin";
    }
    return "wali";
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block lg:w-1/2 bg-muted">
        <div className="flex h-full items-center justify-center p-8">
          <div className="max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <img
                src="/Logo.png"
                alt="Logo Madrasah"
                className="mx-auto h-32 w-32 object-contain"
              />
              <h1 className="text-3xl font-bold">Selamat Datang Kembali</h1>
              <p className="text-muted-foreground">
                Masuk ke akun Anda untuk melanjutkan
              </p>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <img
                src="/Logo2.png"
                alt="Ilustrasi Login"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex h-full flex-col justify-between p-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
          <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Masuk</h1>
              <p className="text-sm text-muted-foreground">
                Masukkan email dan password Anda
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@contoh.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Masuk"}
              </Button>
            </form>
            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                Belum punya akun?{" "}
              </span>
              <Link
                to="/register"
                className="font-medium text-primary hover:underline"
              >
                Daftar
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Madrasah. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}