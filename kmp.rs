
fn main() {
    let i = kmp(r"fn kmp(s: &str, p: &str) -> isize {
        let next = get_next(p);
        let ch_s: Vec<char> = s.chars().collect();
        let ch_p: Vec<char> = p.chars().collect();
        let (len_s, len_p) = (s.len(), p.len());
        let (mut p_s, mut p_p) = (0, 0);
        loop {
            if len_s - p_s < len_p - p_p {
                return -1;
            } else {
                if p_p == len_p - 1 && ch_p[p_p] == ch_s[p_s] {
                    break;
                } else {
                    if ch_p[p_p] == ch_s[p_s] {
                        p_s += 1;
                        p_p += 1;
                    } else {
                        p_p = next[p_p];
                        if ch_p[p_p] != ch_s[p_s] && p_p == 0 {
                            p_s += 1;
                        }
                    }
                }
            }
        }
        p_s as isize - len_p as isize + 1
    }","kmp");
    println!("{}",i);
}

fn kmp(s: &str, p: &str) -> isize {
    let next = get_next(p);
    let ch_s: Vec<char> = s.chars().collect();
    let ch_p: Vec<char> = p.chars().collect();
    let (len_s, len_p) = (s.len(), p.len());
    let (mut p_s, mut p_p) = (0, 0);
    loop {
        if len_s - p_s < len_p - p_p {
            return -1;
        } else {
            if p_p == len_p - 1 && ch_p[p_p] == ch_s[p_s] {
                break;
            } else {
                if ch_p[p_p] == ch_s[p_s] {
                    p_s += 1;
                    p_p += 1;
                } else {
                    p_p = next[p_p];
                    if ch_p[p_p] != ch_s[p_s] && p_p == 0 {
                        p_s += 1;
                    }
                }
            }
        }
    }
    p_s as isize - len_p as isize + 1
}

fn get_next(p: &str) -> Vec<usize> {
    let c: Vec<char> = p.chars().collect();
    let length = c.len();
    let mut next = vec![0; length];
    for i in 1..length {
        next[i] = if (i as isize - 2 >= 0) && c[i - 1] == c[next[i - 1]] {
            next[i - 2] + 1
        } else {
            0
        }
    }
    next
}
