import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Kamala
          </h1>
          <p className="text-xl text-muted-foreground font-merriweather mb-8 max-w-2xl mx-auto">
            A safe space for Indian mothers experiencing postpartum challenges, 
            connecting them with qualified mental health professionals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admin">
              <Button size="lg" className="w-full sm:w-auto">
                <Shield className="h-5 w-5 mr-2" />
                Admin Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Mental Health Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-merriweather">
                Professional support for postpartum depression and anxiety
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
              <CardTitle className="text-lg">Community Forum</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-merriweather">
                Connect with other mothers and share experiences safely
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Secret Circle</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-merriweather">
                Anonymous support for sensitive conversations
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-8 w-8 text-chart-4 mx-auto mb-2" />
              <CardTitle className="text-lg">Verified Professionals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-merriweather">
                Connect with authenticated mental health experts
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Admin Notice */}
        <Card className="max-w-2xl mx-auto bg-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Admin Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-merriweather text-muted-foreground mb-4">
              Access the administrative dashboard to moderate content, verify psychologists, 
              and ensure community safety.
            </p>
            <p className="text-sm text-muted-foreground font-merriweather mb-4">
              ⚠️ <strong>Backend Integration Required:</strong> To enable full functionality with real data, 
              please connect this project to Supabase using the green Supabase button in the top right.
            </p>
            <Link to="/admin">
              <Button variant="outline" className="w-full">
                Enter Admin Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
