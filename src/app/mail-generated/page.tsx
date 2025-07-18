"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Globe, Mail, MapPin, Phone, User, Loader2 } from "lucide-react";
import Swal from "sweetalert2";
import Link from "next/link";

const NewClientPage = () => {
  const [loading, setLoading] = useState(false);

  const [client, setClient] = useState({
    clientName: "",
    companyName: "",
    address: "",
    postal: "",
    state: "",
    country: "India",
    serviceCharge: 0,
    website: "",
  });

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleChange = (field: string, value: string | number) => {
    if (field === "email") setEmail(String(value));
    else if (field === "mobile") setMobile(String(value));
    else {
      setClient((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleReset = () => {
    setClient({
      clientName: "",
      companyName: "",
      address: "",
      postal: "",
      state: "",
      country: "India",
      serviceCharge: 0,
      website: "",
    });
    setEmail("");
    setMobile("");
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Client Saved",
        text: "Client details have been successfully saved!",
      });
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center bg-muted min-h-screen px-4 py-6">
      <Card className="w-full max-w-6xl p-6 bg-background rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            🚀 Generate Your Cold Email
          </h2>
          <Link href="/">
            <Button className="text-muted-foreground bg-background hover:text-foreground text-xl cursor-pointer">
              ✕
            </Button>
          </Link>
        </div>

        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            id="Your Name"
            label="Your Name"
            icon={<User size={16} />}
            value={client.clientName}
            onChange={(e) => handleChange("clientName", e.target.value)}
          />
          <FormField
            id="company-name"
            label="Company Name"
            icon={<User size={16} />}
            value={client.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />
          <FormField
            id="email"
            label="Email Address"
            icon={<Mail size={16} />}
            value={email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <FormField
            id="mobile"
            label="Mobile Number"
            icon={<Phone size={16} />}
            value={mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
          />
          <FormField
            id="address"
            label="Address"
            icon={<MapPin size={16} />}
            value={client.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          <FormField
            id="postal"
            label="Postal Code"
            value={client.postal}
            onChange={(e) => handleChange("postal", e.target.value)}
          />
          <FormField
            id="state"
            label="State / Province"
            value={client.state}
            onChange={(e) => handleChange("state", e.target.value)}
          />
          <div>
            <Label htmlFor="country" className="text-muted-foreground">
              Country
            </Label>
            <select
              id="country"
              value={client.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="mt-2 w-full p-2 border rounded-md text-sm text-foreground bg-background"
            >
              <option value="USA">🇺🇸 USA</option>
              <option value="India">🇮🇳 India</option>
              <option value="UK">🇬🇧 UK</option>
            </select>
          </div>
          <FormField
            id="service-charge"
            label="Service Charge"
            type="number"
            value={client.serviceCharge}
            onChange={(e) =>
              handleChange("serviceCharge", Number(e.target.value))
            }
          />
          <FormField
            id="website"
            label="Website"
            icon={<Globe size={16} />}
            value={client.website}
            onChange={(e) => handleChange("website", e.target.value)}
          />
        </CardContent>

        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={handleReset}
          >
            Cancel
          </Button>
          <Button
            className="w-full sm:w-auto"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Generating Mail...
              </>
            ) : (
              "Generate Mail"
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
};

type FormFieldProps = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function FormField({
  id,
  label,
  icon,
  value,
  onChange,
  type = "text",
}: FormFieldProps) {
  return (
    <div>
      <Label htmlFor={id} className="text-muted-foreground">
        {label}
      </Label>
      <div className="mt-2 flex items-center gap-2 border rounded-md px-3 py-2 bg-background">
        {icon && <span className="text-muted-foreground">{icon}</span>}
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${label.toLowerCase()}`}
          className="border-none bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </div>
  );
}

export default NewClientPage;
