export interface DesignSystemColors {
  primary:   string
  secondary: string
  tertiary:  string
  alternate: string
  success:   string
  warning:   string
  error:     string
  info:      string
}

export interface DesignSystemConfig {
  id:          string
  name:        string
  description: string
  version:     string
  logoInitial: string
  accent:      string
  colors:      DesignSystemColors
}
