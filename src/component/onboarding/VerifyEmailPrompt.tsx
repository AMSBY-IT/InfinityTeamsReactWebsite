import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { AlertTriangle, CheckCircle, Loader2, Mail } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '../ui/button';
import AppHeader from '../shared/AppHeader';
import { useProfile } from '@/hooks/useProfile';

function VerifyEmailPrompt() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const [resendingEmail, setResendingEmail] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const { candidateData } = useProfile();
  useEffect(() => {
    const email = candidateData.candidate.email;
    const emaildVerified = candidateData.candidate.isEmailVerified;
    setEmailVerified(emaildVerified);
    console.log(loading, emailVerified);
    setUser(email);

    async function checkUser() {
      try {
        setLoading(true);

        // Check if email is verified - more robust check

        setLoading(false);
      } catch (error) {
        console.error('Error checking user session:', error);
      }
    }

    checkUser();

    // Set up auth state listener with better error handling
  }, [candidateData]);

  const resendVerificationEmail = async () => {
    if (!user?.email) return;

    setResendingEmail(true);
    setResendSuccess(false);

    try {
      setResendSuccess(true);
    } catch (error: any) {
      console.error('Error resending verification email:', error);
      // Show error to user
      alert(`Failed to resend: ${error.message || 'Unknown error'}`);
    } finally {
      setResendingEmail(false);
    }
  };

  return (
    <>
      <AppHeader />
      <div className='container max-w-md mx-auto py-10 '>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <AlertTriangle className='h-5 w-5 text-amber-500' />
              Email Verification Required
            </CardTitle>
            <CardDescription>
              Please verify your email address to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            {resendSuccess ? (
              <Alert className='bg-green-50 border-green-200'>
                <CheckCircle className='h-4 w-4 text-green-600' />
                <AlertTitle>Verification email sent!</AlertTitle>
                <AlertDescription>
                  Please check your inbox at {user?.email} and click the
                  verification link.
                </AlertDescription>
              </Alert>
            ) : (
              <div className='space-y-4'>
                <p>
                  Weve sent a verification email to <strong>{user}</strong>.
                  Please check your inbox and click the verification link to
                  activate your account.
                </p>
                <p className='text-sm text-muted-foreground'>
                  If you dont see the email, check your spam folder or request a
                  new verification email.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              variant='outline'
              className='w-full'
              onClick={resendVerificationEmail}
              disabled={resendingEmail}
            >
              {resendingEmail ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className='mr-2 h-4 w-4' />
                  Resend Verification Email
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default VerifyEmailPrompt;
