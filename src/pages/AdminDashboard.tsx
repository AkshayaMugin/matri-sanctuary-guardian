import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  MessageCircle, 
  UserCheck, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("articles");

  // Mock data structure - in real app this would come from Firebase
  const pendingArticles = [
    {
      id: 1,
      title: "Coping with Postpartum Anxiety",
      author: "Dr. Priya Sharma",
      authorType: "psychologist",
      content: "Learn effective strategies to manage anxiety after childbirth...",
      submittedAt: "2024-01-15T10:30:00Z",
      status: "pending"
    },
    {
      id: 2,
      title: "My Journey Through Postpartum Depression",
      author: "Anonymous User",
      authorType: "user",
      content: "Sharing my personal experience to help other mothers...",
      submittedAt: "2024-01-15T09:15:00Z",
      status: "pending"
    }
  ];

  const reportedContent = [
    {
      id: 1,
      type: "article",
      title: "Controversial parenting advice",
      author: "User123",
      reportReason: "Inappropriate content",
      reportedAt: "2024-01-15T11:00:00Z"
    },
    {
      id: 2,
      type: "comment",
      content: "This advice is completely wrong and harmful...",
      author: "CommenterX",
      reportReason: "Misleading information",
      reportedAt: "2024-01-15T10:45:00Z"
    }
  ];

  const pendingVerifications = [
    {
      id: 1,
      name: "Dr. Ananya Gupta",
      specialization: "Perinatal Psychology",
      experience: "8 years",
      documents: ["license.pdf", "degree.pdf", "registration.pdf"],
      submittedAt: "2024-01-14T14:20:00Z"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialization: "Clinical Psychology",
      experience: "12 years",
      documents: ["license.pdf", "degree.pdf", "registration.pdf"],
      submittedAt: "2024-01-14T16:30:00Z"
    }
  ];

  const flaggedSecrets = [
    {
      id: 1,
      content: "I'm having thoughts of harming myself...",
      flaggedReason: "Self-harm detection",
      flaggedAt: "2024-01-15T12:00:00Z",
      severity: "high"
    },
    {
      id: 2,
      content: "Someone is being abusive to me at home...",
      flaggedReason: "Abuse detection",
      flaggedAt: "2024-01-15T11:30:00Z",
      severity: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Kamala Admin Dashboard</h1>
          <p className="text-muted-foreground font-merriweather">
            Moderating content and ensuring community safety for mothers and mental health professionals
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Article Moderation
            </TabsTrigger>
            <TabsTrigger value="comments" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Comment Review
            </TabsTrigger>
            <TabsTrigger value="verification" className="flex items-center gap-2">
              <UserCheck className="h-4 w-4" />
              Psychologist Verification
            </TabsTrigger>
            <TabsTrigger value="secrets" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Secret Circle Monitor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pending Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Pending Articles ({pendingArticles.length})
                  </CardTitle>
                  <CardDescription>Articles awaiting moderation approval</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingArticles.map((article) => (
                    <div key={article.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-sm">{article.title}</h4>
                        <Badge variant={article.authorType === 'psychologist' ? 'default' : 'secondary'}>
                          {article.authorType}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">By: {article.author}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">{article.content}</p>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="default">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Reported Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Reported Content ({reportedContent.length})
                  </CardTitle>
                  <CardDescription>Content flagged by community members</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reportedContent.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-sm">
                          {item.type === 'article' ? item.title : 'Comment'}
                        </h4>
                        <Badge variant="destructive">{item.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">By: {item.author}</p>
                      <p className="text-sm text-muted-foreground">
                        Reason: {item.reportReason}
                      </p>
                      {item.type === 'comment' && (
                        <p className="text-sm bg-muted p-2 rounded italic">
                          "{item.content}"
                        </p>
                      )}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="destructive">
                          Remove
                        </Button>
                        <Button size="sm" variant="outline">
                          Dismiss Report
                        </Button>
                        <Button size="sm" variant="secondary">
                          Warn User
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Comment Moderation</CardTitle>
                <CardDescription>Review reported comments from the community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">
                  All reported comments appear in the Article Moderation tab for unified review.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verification" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Psychologist Verification ({pendingVerifications.length})
                </CardTitle>
                <CardDescription>Verify credentials and authenticity of mental health professionals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingVerifications.map((psychologist) => (
                  <div key={psychologist.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{psychologist.name}</h4>
                        <p className="text-sm text-muted-foreground">{psychologist.specialization}</p>
                        <p className="text-sm text-muted-foreground">Experience: {psychologist.experience}</p>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-2">Submitted Documents:</h5>
                      <div className="flex flex-wrap gap-2">
                        {psychologist.documents.map((doc, index) => (
                          <Badge key={index} variant="outline" className="cursor-pointer hover:bg-accent">
                            📄 {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="default">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Verify & Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                      <Button size="sm" variant="outline">
                        Request Resubmission
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="secrets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Secret Circle Monitoring ({flaggedSecrets.length})
                </CardTitle>
                <CardDescription>
                  Anonymous messages flagged by automated safety detection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {flaggedSecrets.map((secret) => (
                  <div key={secret.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <Badge 
                        variant={secret.severity === 'high' ? 'destructive' : 'secondary'}
                        className="mb-2"
                      >
                        {secret.severity.toUpperCase()} PRIORITY
                      </Badge>
                      <p className="text-xs text-muted-foreground">
                        {new Date(secret.flaggedAt).toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm italic">"{secret.content}"</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      <AlertTriangle className="h-4 w-4 inline mr-1" />
                      Flagged for: {secret.flaggedReason}
                    </p>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="destructive">
                        Delete Message
                      </Button>
                      <Button size="sm" variant="outline">
                        Contact User Privately
                      </Button>
                      <Button size="sm" variant="secondary">
                        Mark as Safe
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;