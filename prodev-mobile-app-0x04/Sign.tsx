import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '@/styles/_joinstyle';
import { GOOGLELOGO, FACEBOOKLOGO } from '@/constants';
import { useNavigation } from 'expo-router';

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top icons (back or logo section) */}
      <View style={styles.iconsection}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign In</Text>
        {/* You can add an icon or leave empty */}
        <View />
      </View>

      {/* Title and subtitle */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back!</Text>
        <Text style={styles.subText}>Please sign in to continue</Text>
      </View>

      {/* Form section */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email Address</Text>
          <TextInput placeholder="Enter email" style={styles.formControl} keyboardType="email-address" />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput placeholder="Enter password" secureTextEntry style={styles.passwordControl} />
            {/* You can add eye icon here for visibility toggle */}
          </View>
        </View>

        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>

      {/* Primary Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation to Join */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.push('join')}>
          <Text style={styles.signupSubTitleText}>Join now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
