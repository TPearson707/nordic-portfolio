// src/components/background/AuroraErrorBoundary.tsx
// Catches Three.js / WebGL errors so they don't unmount the whole app.

import { Component, type ReactNode } from 'react'
import AuroraFallback from './AuroraFallback'

interface Props { children: ReactNode }
interface State { hasError: boolean }

export default class AuroraErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return <AuroraFallback />
    return this.props.children
  }
}
