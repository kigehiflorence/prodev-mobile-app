import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '@/styles/_joinstyle';
import { GOOGLELOGO, FACEBOOKLOGO } from '@/constants';
import { useNavigation } from 'expo-router';

export default function Join() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top icons (logo or back) */}
      <View style={styles.iconsection}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Join</Text>
        <View />
      </View>

      {/* Title and subtitle */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Let's get you started</Text>
      </View>

      {/* Form section */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput placeholder="Enter full name" style={styles.formControl} />
        </View>

        <View>
          <Text style={styles.formLabel}>Email Address</Text>
          <TextInput placeholder="Enter email" style={styles.formControl} keyboardType="email-address" />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput placeholder="Create password" secureTextEntry style={styles.passwordControl} />
            {/* Optional eye icon */}
          </View>
        </View>
      </View>

      {/* Primary Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
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

      {/* Navigation to Sign In */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.push('signin')}>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
