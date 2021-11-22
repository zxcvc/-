
fn main() {
    let i = kmp("aabaababbabaaabaaaabbaaaabaab","babba");
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
                    if p_p > 0 {
                        p_p = next[p_p]-1;
                    }
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
    next[1] = 1;
    let mut i = 2;
    let mut j = 0;
    while i < length {
        j = next[i-1]-1;
        if c[i-1] == c[j]{
            next[i] = next[i-1] + 1;
        }else{
            while !(j == 0 || c[j] == c[i-1]){
                j = next[j] - 1;
            }
            next[i] = j + 1;
        }
        i += 1;
    }
    next
}
