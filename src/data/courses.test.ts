import { describe, it, expect } from 'vitest';
import { COURSES } from './courses';

describe('COURSES data', () => {
  it('should have the updated BLS Renewal price of $85', () => {
    const course = COURSES.find(c => c.code === 'BLS-RENEWAL');
    expect(course?.price).toBe(85);
  });

  it('should have the updated BLS Provider price of $110', () => {
    const course = COURSES.find(c => c.code === 'BLS-PROVIDER');
    expect(course?.price).toBe(110);
  });

  it('should have the updated American Red Cross BLS price of $125', () => {
    const course = COURSES.find(c => c.code === 'ARC-BLS');
    expect(course?.price).toBe(125);
  });

  it('should have the updated American Red Cross Heartsaver price of $140', () => {
    const course = COURSES.find(c => c.code === 'HEARTSAVER-CPR-AED');
    expect(course?.price).toBe(140);
  });

  it('should have updated schedule info for BLS Renewal', () => {
    const course = COURSES.find(c => c.code === 'BLS-RENEWAL');
    expect(course?.desc).toContain('Mon–Wed at 1pm');
  });

  it('should have updated schedule info for BLS Provider', () => {
    const course = COURSES.find(c => c.code === 'BLS-PROVIDER');
    expect(course?.desc).toContain('Mon & Wed at 8am');
  });
});
