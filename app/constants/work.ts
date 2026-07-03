import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2022',
    title: 'Vivek Mandir School',
    subtitle: 'Class X (CBSE)',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'Saket Public School',
    subtitle: 'Class XII (CBSE)',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024',
    title: 'Sapthagiri NPS University',
    subtitle: 'B.Tech CSE (AI & ML)',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2024',
    title: 'Student HRD Coordinator',
    subtitle: 'Sapthagiri NPS University',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Building...',
    subtitle: 'Always learning',
    position: 'right',
  }
]
