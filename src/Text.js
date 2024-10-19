import React from "react";
import { Text as RnText, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Text = ({
  children,
  variant = "body",
  color = "#000",
  align = "left",
  weight = "normal",
  fontFamily,
  transform,
  decoration,
  lineHeight,
  letterSpacing,
  numberOfLines,
  onPress,
  accessible = true,
  accessibilityLabel,
  style,
  rotate = 0,
  gradientColors,
}) => {
  const styles = StyleSheet.create({
    base: {
      color: color,
      textAlign: align,
      fontWeight: weight,
      fontFamily: fontFamily,
      textTransform: transform,
      textDecorationLine: decoration,
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      transform: [{ rotate: `${rotate}deg` }],
    },
    h1: { fontSize: 32, fontWeight: "bold" },
    h2: { fontSize: 28, fontWeight: "600" },
    body: { fontSize: 16 },
    caption: { fontSize: 12, fontStyle: "italic" },
  });

  const combinedStyles = [styles.base, variant && styles[variant], style];

  if (gradientColors) {
    return (
      <View accessible={accessible} accessibilityLabel={accessibilityLabel}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <RnText
            style={combinedStyles}
            numberOfLines={numberOfLines}
            onPress={onPress}
          >
            {children}
          </RnText>
        </LinearGradient>
      </View>
    );
  }

  return (
    <RnText
      style={combinedStyles}
      numberOfLines={numberOfLines}
      onPress={onPress}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </RnText>
  );
};

export default Text;
